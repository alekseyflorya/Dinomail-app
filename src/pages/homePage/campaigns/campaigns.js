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
import arrUp from "../../../assets/images/whiteArrUp.png";
import deleted from "../../../assets/images/deleteTag.png";
import graph from "../../../assets/images/Graph.png";

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
    const [isOpenSubheader, setIsOpenSubheader] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [item, setItem] = useState();

    const statusesObject = {
        "COMPLETED": {color: "red", title: "Completed"}, 
        "DRAFT": {color: "grey", title: "Draft"}, 
        "SCHEDULED": {color: "red", title: "Scheduled"}, 
        "ONGOING": {color: "GREEN", title: "Ongoing"}
    }

    const handleFilter = () => {
        setIsFiltered(true)
    }

    const handleOpenSubheader = () => {
        setIsOpenSubheader(true)
        if(isOpenSubheader){
            setIsOpenSubheader(false)
        }
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

    const handleRowHover = (event, rowIndex) => setHoveredIndex(rowIndex);
    const handleRowHoverLeave = (event, rowIndex) => setHoveredIndex(null);


    const handleShowContent = () => {
        setisShowContent(true)
    }

    useEffect(() => {
        const el = document.getElementsByClassName('campaigns-box');
        
    },[])
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
                            onClick={handleOpenSubheader}
                            className={"filled"} 
                            >
                                <span>Create new campaign</span>
                                <img src={isOpenSubheader ? arrUp : arrow} style={isShowContent?{display:"flex"}:{display:"none"}}/> 
                        </button>
                    </div>
                </div>
            </div>
            <div className={isOpenSubheader ? 'upload-campaign':"hide-upload"}>
                <div className='cards'>
                    <div className='email'>
                            <img src={emails} alt="upload"/>
                            <div className='upload-des'>
                                <h4>Email</h4>
                                <p>Send email newsletters, announcements and more</p>
                            </div>
                    </div>
                    <div className='SMS'>
                            <div className='cooming-soon'>
                                <span>Soon</span>
                            </div>
                            <img src={sms} alt="upload"/>
                            <div className='upload-des'>
                                <h4>SMS</h4>
                                <p>Send SMS notifications, offers, surveys and more</p>
                            </div>
                    </div>
                    <div className='journey'>
                            <div className='cooming-soon'>
                                <span>Soon</span>
                            </div>
                            <img src={journey} alt="upload"/>
                            <div className='upload-des'>
                                <h4>Import</h4>
                                <p>Sync your contacts lists with Mailchimp, Shopify, Ortto, etc.</p>
                            </div>
                    </div>
                    <div className='automations'>
                            <div className='cooming-soon'>
                                <span>Soon</span>
                            </div>
                            <img src={automations} alt="upload"/>
                            <div className='upload-des'>
                                <h4>Import</h4>
                                <p>Sync your contacts lists with Mailchimp, Shopify, Ortto, etc.</p>
                            </div>
                    </div>
                </div>
            </div>
            {
                isShowContent?
                <div 
                    className={'campaigns-box'}
                    style={isOpenSubheader?{marginTop:"27vh"}: null}
                    >
                    <div className='c-title'>
                        <h1>Campaigns</h1>
                        <p>Email marketing feature for creating and sending newsletters with email templates, 
                            email addresses, send time settings, and results analytics.</p>
                    </div>   
                    <div className='inner-box'>
                        <div className='tabs' >
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
                                        color:"#a5a5a5",
                                        type:"Regular", 
                                        des:"Edited st, october 4th 10:11 AM by You"
                                    },
                                    {
                                        img:emails, 
                                        title:"Promocode gift", 
                                        status:"Ongoing", 
                                        type:"Event", 
                                        color:"#3F93F7",
                                        des:"Edited st, october 4th 10:11 AM by You"
                                    },
                                    {
                                        img:emails, 
                                        title:"The weekly drop", 
                                        status:"Completed", 
                                        color:"#1BBDA0",
                                        type:"Event", 
                                        des:"Edited st, october 4th 10:11 AM by You"
                                    },
                                    {
                                        img:emails, 
                                        title:"The weekly drop", 
                                        status:"Scheduled", 
                                        color:"#EDB833",
                                        type:"Event", 
                                        des:"Edited st, october 4th 10:11 AM by You"
                                    },
                                ].map((item, index)=> {
                                    return(
                                        <div className='card' 
                                            key={index} 
                                            onMouseEnter={e => handleRowHover(e,index)} 
                                            onMouseLeave={e => handleRowHoverLeave(e, index)}
                                        >
                                            <div 
                                                id="buttons"
                                                style={index == hoveredIndex ? 
                                                        {display:"flex",position:"absolute",} 
                                                        : 
                                                        {display:"none"}} 
                                                className='button-wrapper'
                                            >
                                                    <img
                                                        src={deleted}
                                                        style={{width:"32px", height:"32px", marginRight:"10px"}}
                                                    />
                                                    <img 
                                                        src={graph}
                                                        style={{width:"32px", height:"32px"}}
                                                    />
                                            </div>
                                            <img src={item.img} alt="cardImg"/>
                                            <div className='card-content'>
                                                <div className='title'>
                                                    <h5>{item.title}</h5>
                                                    <div className='tab-select' style={{background: item.color}}>
                                                        <span>{item.status}</span>
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