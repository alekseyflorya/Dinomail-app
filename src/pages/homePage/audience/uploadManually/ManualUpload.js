import { useParams, useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react';
import "./style.scss";
import audience from "../../../../assets/images/audienceicon.png";
import ProgressBar from "../../../../components/progressBar/ProgressBar";
import TextareaCounter from 'react-textarea-counter';
import { LimitedTextarea } from "./textarea";
import closeblack from "../../../../assets/images/xblack.png";

export const UploadManually = () => {
    const [isText, setIsText] = useState()
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isRow, setIsRow] = useState(1)
    let {id} = useParams()
    console.log(isRow, "isrow")
    console.log(isText, "istext")

    const navigate = useNavigate()

    useEffect(() => {
        const addAutoResize = () => {
            document.querySelectorAll('[data-autoresize]').forEach(function (element) {
              element.style.boxSizing = 'border-box';
              var offset = element.offsetHeight - element.clientHeight;
              element.addEventListener('input', function (event) {
                event.target.style.height = 'auto';
                event.target.style.height = event.target.scrollHeight + offset + 'px';
              });
              element.removeAttribute('data-autoresize');
            });
        }
        addAutoResize()  
    },[])    

    const handleNav = () => {
        navigate('/audience/manualsegment', {replace:true})
    }

    const handleChangeText = (e) => {
        setIsText(e.target.value);
        setIsRow(e.target.value?.split("\n")?.length)
        console.log( e.target.value?.split("\n")?.length, "valeu" ) 
    }

    return(
        <div className="upload-manually" id={id}>
            <div className='header'>
                <div className='content-box'>
                    <div className='route-status'>
                        <img src={audience} alt="header-audience"/>
                        <span>Audience /<p>Add contacts manually</p></span>
                    </div>
                    <div className="btns">
                            <button className="transparent">
                                <span>Save as draft</span>
                            </button>
                            <button 
                                className={"filled"} 
                                onClick={handleNav}
                                disabled={!isText}
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
                            <p className="main-text"><span>1/2</span> Adding contacts</p>
                            <p>Just copy your contact list as text and paste it into text field</p>
                            <span>4 contacts added</span>
                        </div>
                    </div>
                    <div className='area-wrapper'>
                        <textarea
                            className="textarea"
                            onChange={handleChangeText}
                        />
                    </div>
            </div>
        </div>
    )
}

{
    /*
    <div className="text-field">
        <div className="vl">
            {Array.from(Array(isRow).keys()).map((item,index) => {
                return(
                    <span data-autoresize>{item +1}</span>
                )
            })}
        </div>
        <textarea 
            id="myTextarea"
            addAutoResize
            rows={17}
            onChange={handleChangeText}
            maxLength={1000000000000}
        ></textarea>
    </div>
    */
}