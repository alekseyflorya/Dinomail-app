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

    const handleNavBack = () => {
        navigate('/audience/', {replace:true})
    }

    return(
        <div className="upload-wrapper" id={id}>
            <div className='header'>
                <div className='content-box'>
                    <div className='route-status'>
                        <img src={audience} alt="header-audience"/>
                        <div className="routes">
                            <p className="prev-route" onClick={handleNavBack}>Audience/</p> 
                            <p className="curr-route"> Add contacts via file</p></div>
                    </div>
                    <div className={"btns"}>
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
            <div className="pg-bars">
                <div className="progress-bar-upload">
                    <ProgressBar bgcolor="#1BBDA0" completed={50} className="progress-bar"/>
                </div>
            </div>
            <div className="inner-content">
                    <div className="count-upload">
                        <div className="title-count">
                            <span>{isUploaded? 1 : 0}/2</span>
                            <p>Upload file</p>
                        </div>
                    </div>
                
                <div className="uploader-box">
                    <div className="uploader">
                        <DropFile setIsUploaded={setIsUploaded}/>
                    </div>
                </div>
            </div>
        </div>
    )
}