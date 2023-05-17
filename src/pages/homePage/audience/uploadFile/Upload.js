import { useParams, useNavigate } from "react-router-dom";
import {useState} from 'react';
import "./style.scss";
import audience from "../../../../assets/images/audienceicon.png";
import ProgressBar from "../../../../components/progressBar/ProgressBar";
import DropFile from "./Dropzone";

export const Upload = () => {
    let {id} = useParams()
    const [isUploaded, setIsUploaded] = useState(false)

    const navigate = useNavigate()

    const handleNav = () => {
        navigate('/audience/segmentation', {replace:true})
    }

    return(
        <div className="upload-wrapper" id={id}>
            <div className='header'>
                <div className='content-box'>
                    <div className='route-status'>
                        <img src={audience} alt="header-audience"/>
                        <span>Audience / <p>Add contacts via file</p></span>
                    </div>
                </div>
            </div>
            <div className="inner-content">
                {
                    isUploaded ?
                        <div className="pg-bars">
                            <div className="progress-bar-upload">
                                <h1>Upload the file</h1>
                                <ProgressBar bgcolor="#EDB833" completed={100} className="progress-bar"/>
                            </div>
                            <div className="progress-bar-segmentation">
                                <h1>Segmentation</h1>
                                <ProgressBar bgcolor="#EDB833" completed={0} className="progress-bar"/>
                            </div>
                        </div>
                    :
                    <div className="count-upload">
                        <div className="title-count">
                            <span>1/2</span>
                            <p>Upload file</p>
                        </div>
                        <div className="btns">
                            <button className="transparent">
                                <span>Save as draft</span>
                            </button>
                            <button 
                                className={"filled"} 
                                disabled={!isUploaded}
                                onClick={handleNav}
                                >
                                <span>Next</span>
                            </button>
                        </div>
                    </div>
                }
                <div className="uploader-box">
                    <div className="uploader">
                        <DropFile setIsUploaded={setIsUploaded}/>
                    </div>
                    <div className={isUploaded ? "btns" : "btns-hide"}>
                        <button className="transparent">
                            <span>Save as draft</span>
                        </button>
                        <button 
                            className={"filled"} 
                            disabled={!isUploaded}
                            onClick={handleNav}
                            >
                            <span>Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}