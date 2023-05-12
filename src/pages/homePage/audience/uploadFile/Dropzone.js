import React, { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import cloud from "../../../../assets/images/uploadIcon.png";
import cloudUpload from "../../../../assets/images/getUpload.png";
import deleteFile from "../../../../assets/images/deleteFile.png";
import "./style.scss";

function DropFile({setIsUploaded}) {
  const [myFile, setMyFile] = useState(null)

  const {getRootProps, getInputProps} = useDropzone({
    onDrop: acceptedFiles => {
      setMyFile(acceptedFiles.map(file => <span key={file.path}>{file.path}</span>));
    }
  });

  useEffect(() => {
    setIsUploaded(!!myFile?.length)
  }, [myFile])

  const removeFile = () => {
    setMyFile(null)
  }
  
  console.log(myFile, "file")
  
  return (
    <section className={"container"}>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()}/>
        <img src={myFile ? cloud : cloudUpload} alt={'cloud'}/>
        <div className={!myFile ? "options" : "options-hide"}>
            <span>.CSV .TXT</span>
            <p>You can drag and drop the file or <a>Browse</a></p>
        </div>
      </div>
      <aside>
        <div className={myFile ? 'item-name' : "item-hide"}>
            <div>
                <button>
                    <span>{myFile}</span>
                    <img src={deleteFile} alt={'x'} onClick={removeFile}/>
                </button>
            </div>
        </div>
      </aside>
    </section>
  )
}

export default DropFile;