import './style.scss';
import arrow from "../../../assets/images/whiteArrDown.png";
import search from "../../../assets/images/search.png";
import {useState, useEffect,useRef} from "react";
import plane from "../../../assets/images/plane.png";
import dinoImg from '../../../assets/images/audience.png';
import all from "../../../assets/images/all.png";
import ongoing from "../../../assets/images/ongoing.png";
import completed from "../../../assets/images/completed.png";
import drafts from "../../../assets/images/drafts.png";
import emails from "../../../assets/images/emails.png";
import sms from "../../../assets/images/sms.png";
import journey from "../../../assets/images/journey.png";
import automations from "../../../assets/images/automations.png";


export const Campaigns = () => {
    /*
    const stusesObject = {"COMPLETED": {color: "red", title: "Completed"}, "ONGOING": {color: "GREEN", title: "On going"}}
    stusesObject[card.status]
    stusesObject[card.status]
    {color: "red", title: "Completed"}
    const currentStatus = stusesObject[card.status]
    currentStatus.color
    currentStatus.title
    */

    const [isOpen, setIsOpen] = useState(false)
    const [isShowContent, setisShowContent] = useState()
    const [isSelected, setIsSelected] = useState(false)
    const [isFiltered, setIsFiltered] = useState(false)

    const statusesObject = {
        "COMPLETED": {color: "red", title: "Completed"}, 
        "DRAFT": {color: "grey", title: "Draft"}, 
        "SCHEDULED": {color: "red", title: "Scheduled"}, 
        "ONGOING": {color: "GREEN", title: "Ongoing"}
    }

    const handleFilter = () => {
        setIsFiltered(true)
    }


    const handleOpenModal = () => {
        setIsOpen(true)
    }
    
    const handleSelected = () => {
        setIsSelected(true)
        if(isSelected) {
            setIsSelected(false)
        }
    }

    const handleShowContent = () => {
        setisShowContent(true)
    }
    return(
        <div className='capmaigns-wrapper'>
            <div className='header'>
                <div className='content-box'>
                    <div className='route-status'>
                        <div className="manual-routes">
                            <img src={plane}/>
                            <span>Campaigns </span>
                        </div>
                    </div>
                    <div className="btns">
                        <button 
                            className={"filled"} 
                            >
                                <span>Create new campaign</span>
                                <img src={arrow} style={isShowContent?{display:"flex"}:{display:"none"}}/> 
                        </button>
                    </div>
                </div>
            </div>
            {
                isShowContent?
                <div className='campaigns-box'>
                    <div className='c-title'>
                        <h1>Campaigns</h1>
                        <p>Email marketing feature for creating and sending newsletters with email templates, 
                            email addresses, send time settings, and results analytics.</p>
                    </div>   
                    <div className='inner-box'>
                        <div className='tabs'>
                            <h4>View by Status</h4>
                            <div className='upper-container'>
                                {
                                    [
                                        {img:all, text:"All"},
                                        {img:ongoing, text:"Ongoing"},
                                        {img:completed, text:"Completed"},
                                        {img:drafts, text:"Drafts"},
                                    ].map((item, index) => {
                                        return(
                                                <div className='link' key={index} onClick={handleFilter}>
                                                    <img src={item.img}/>
                                                    <span className='text'>{item.text}</span>
                                                </div>
                                        )
                                    })
                                }
                            </div>    
                            <div className='emails'>
                                <img src={emails}/>
                                <span className='text'>Emails</span>
                            </div>
                            {
                                [
                                    {img:sms, text:"SMS", des:"Soon"},
                                    {img:journey, text:"Journey", des:"Soon"},
                                    {img:automations, text:"AlAutomations", des:"Soon"},
                                ].map((item, index) => {
                                    return(
                                        <div className='link-s' key={index} onClick={handleFilter}>
                                            <img src={item.img}/>
                                            <span className='text'>{item.text}</span>
                                            <div className='status'>
                                                <span>{item.des}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='cards'>
                            <div className='search-input'>
                                <input
                                    placeholder='Email, name, address, etc...'
                                />
                                <img src={search}/>
                            </div>
                            {
                                [
                                    {
                                        img:emails, 
                                        title:"Welcome message", 
                                        status:"Draft", 
                                        type:"Regular", 
                                        des:"Edited st, october 4th 10:11 AM by You"
                                    },
                                    {
                                        img:emails, 
                                        title:"Promocode gift", 
                                        status:"Ongoing", 
                                        type:"Event", 
                                        des:"Edited st, october 4th 10:11 AM by You"
                                    },
                                    {
                                        img:emails, 
                                        title:"The weekly drop", 
                                        status:"Completed", 
                                        type:"Event", 
                                        des:"Edited st, october 4th 10:11 AM by You"
                                    },
                                    {
                                        img:emails, 
                                        title:"The weekly drop", 
                                        status:"Completed", 
                                        type:"Event", 
                                        des:"Edited st, october 4th 10:11 AM by You"
                                    },
                                ].map((item, index)=> {
                                    return(
                                        <div className='card' key={index}>
                                            <img src={item.img} alt="cardImg"/>
                                            <div className='card-content'>
                                                <div className='title'>
                                                    <h5>{item.title}</h5>
                                                    <div className='tab-select'>
                                                        
                                                    </div>
                                                </div>
                                                <div className='status'>
                                                    <span>{item.status}</span>
                                                </div>
                                                <span className='type'>{item.type}</span>
                                                <span className='des'>{item.des}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                :
                <div className="campaigns-preview">
                    <img src={dinoImg} alt="campDino"/>
                    <div className="campaign-desc">
                        <h3>Add your first Dino Campaign</h3>
                        <p>Form compnies for different types of contacts. Set up events, giveaways, and notifications and manage your companies</p>
                    </div>
                    <button onClick={handleShowContent}>
                        <span>Create first campaign</span>
                    </button>
                </div>
            }
        </div>
    )
}