import "./style.scss"
import audienceImg from '../../../assets/images/audience.png';
import note from "../../../assets/images/Notebook.png";
import dots from '../../../assets/images/auddots.png';
import sub from "../../../assets/images/subs.png";
import chat from "../../../assets/images/chat.png";
import magnet from "../../../assets/images/magnet.png";
import eye from "../../../assets/images/closedeye.png";
import team from "../../../assets/images/team.png";
import dropdown from "../../../assets/images/shevrone.png";
import arrUp from "../../../assets/images/Vector.png";
import audience from "../../../assets/images/audienceicon.png";
import upload from "../../../assets/images/upload.png";
import add from "../../../assets/images/copy.png";
import cloud from '../../../assets/images/upload-cloud.png';
import { Cards } from "./cards/Cards";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {useState, useEffect} from "react";


export const Audience = () => {
    const [isShowContacts, setisShowContacts] = useState()
    const [isUpload, setIsUpload] = useState(false)

    const location = useLocation();

    useEffect(() => {
        console.log(location, "location")
    },[location])

    const handleUpload = () => {
        if(isUpload){
            setIsUpload(false)
        } else {
            setIsUpload(true)
        }
    }

    const handleClick = () => [
        setisShowContacts(true)
    ]

    const navigate = useNavigate()

    const handleNav = () => {
        navigate('/audience/upload', {replace:true})
    }
    return(
        <div className="audience" id="audience">
            <div className='header'>
                <div className='content-box'>
                    <div className='route-status'>
                        <img src ={audience} alt="header-audience"/>
                        <span>Audience</span>
                    </div>
                    <button onClick={handleUpload}>
                        <span>Add contacts</span>
                        <img src={isUpload ? arrUp : dropdown} alt="header-dropdown"/>
                    </button>
                </div>
            </div>
            <div className={isUpload ? 'upload-contacts' : "hide-upload"}>
                <div className='cards'>
                    <div className='card1' onClick={handleNav}>
                            <img src={upload} alt="upload"/>
                            <div className='upload-des'>
                                <h4>Upload file</h4>
                                <p>Import contacts from a CSV or tab-delimited TXT file More info</p>
                            </div>
                    </div>
                    <div className='card2'>
                            <img src={add} alt="upload"/>
                            <div className='upload-des'>
                                <h4>Add manually</h4>
                                <p>Directly pate in new contacts from a speedheet or similar list</p>
                            </div>
                    </div>
                    <div className='import'>
                            <div className='cooming-soon'>
                                <span>Cooming soon</span>
                            </div>
                            <img src={cloud} alt="upload"/>
                            <div className='upload-des'>
                                <h4>Import</h4>
                                <p>Sync your contacts lists with Mailchimp, Shopify, Ortto, etc.</p>
                            </div>
                    </div>
                </div>
            </div>
            <div className="audience-content">
                {
                    isShowContacts ? 
                    <div className={isUpload ? "bars-moved" :'audience-bars'}>
                        <div className="aud-title">
                            <h1>Audience</h1>
                            <button className={isUpload? "drafts" : "drafts-hide"}>
                                <span>Drafts</span>
                            </button>
                        </div>   
                        <div className="all-contacts">
                            <div className="title">
                                <img src={note} alt='note'/>
                                <span>All contacts</span>
                            </div>
                            <div className="main-stats">
                                <div className="stat1">
                                    <span>Members</span>
                                    <h3>688</h3>
                                </div>
                                <div className="stat2">
                                    <span>Subscribers</span>
                                    <h3>228</h3>
                                </div>
                                <div className="stat3">
                                    <span>Addedd last 30 days</span>
                                    <h3>153</h3>
                                </div>
                                <img className="dots" src={dots} alt="dots"/>
                            </div>
                        </div>
                        <Cards/>
                    </div> 
                    : 
                    <div className="audience-preview">
                        <img src={audienceImg} alt="audDino"/>
                        <div className="audience-desc">
                            <h3>Add your first Dino Audience</h3>
                            <p>Your audience is where you'll store and manage your contacts. One you add your contacts, 
                                        you'll be able to send your first campaign. We'll walk you trough the process.</p>
                        </div>
                        <button onClick={handleClick}>
                            <span>Add your audience</span>
                        </button>
                    </div>   
                }
            </div>
        </div>
    )
}