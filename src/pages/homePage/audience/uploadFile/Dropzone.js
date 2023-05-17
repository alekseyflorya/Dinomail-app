import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import cloud from "../../../../assets/images/uploadIcon.png";
import cloudUpload from "../../../../assets/images/getUpload.png";
import deleteFile from "../../../../assets/images/deleteFile.png";
import "./style.scss";

function DropFile({setIsUploaded}) {
  const [myFile, setMyFile] = useState(null)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const {getRootProps, getInputProps} = useDropzone({
    onDrop: acceptedFiles => {
      setMyFile(acceptedFiles.map(file => <span key={file.path}>{file.path}</span>));
    }
  });

  useEffect(() => {
    setIsUploaded(!!myFile?.length)
  }, [myFile])

  const handleRemove = () => {
    setIsOpenModal(false)
    setMyFile(null)
  }
  
  console.log(myFile, "file")
  
  return (
    <section className={"container"}>
        <div className={isOpenModal ? "modal-upload" : 'modal-hide'}>
            <div className="modal-window">
              <h1>Are you sure you want to delete this file</h1>
              <span>This file will be deleted irretrievably</span>
              <div className="btns">
                <button onClick={() => {setIsOpenModal(false)}} className="bnt1">
                  <span>Continue</span>
                </button>
                <button className="bnt2" onClick={handleRemove}>
                  <span>Yes, delete</span>
                </button>
              </div>
          </div>
        </div>
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
                    <img src={deleteFile} alt={'x'} onClick={() => {setIsOpenModal(true)}}/>
                </button>
            </div>
        </div>
      </aside>
    </section>
  )
}

export default DropFile;