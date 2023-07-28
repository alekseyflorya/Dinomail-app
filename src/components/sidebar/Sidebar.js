import './style.scss';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import img1 from "../../assets/images/getstartedicon.png";
import img2 from "../../assets/images/audienceicon.png";
import img3 from "../../assets/images/dashboardicon.png";
import img4 from "../../assets/images/campaignsicon.png";
import img5 from "../../assets/images/hashtagicon.png";

import profile from "../../assets/images/user.png";
import settings from "../../assets/images/settings.png";
import bellprofile from "../../assets/images/profbell.png";
import logout from "../../assets/images/proflogout.png";

import img6 from "../../assets/images/audienceicon-white.png";
import img7 from "../../assets/images/dashboardicon-white.png";
import img8 from "../../assets/images/campaignsicon-white.png";
import img9 from "../../assets/images/getstartedicon-white.png";
import img10 from "../../assets/images/hashtagicon-white.png";

import logo from "../../assets/images/logotemplate.png";
import userimg from "../../assets/images/userdino.png";
import dots from '../../assets/images/dots.png';
import bell from '../../assets/images/alarmbell.png';

export const Sidebar = () => {
    const [isOpenPopUp, setIsOpenPopUp] = useState(false);

    const handleOpenPopUp = () => {
        setIsOpenPopUp(true)
        if(isOpenPopUp){
            setIsOpenPopUp(false)
        }
    }

    const activePopUpStyle = isOpenPopUp ? {border:"1px solid #E8E8E8", borderRadius:"10px"} : null

    const location = useLocation();
    const activePath = location.pathname ? {background:"#1BBDA0", borderRadius: "10px"} : null

    useEffect(() => {
    }, [location])

    const navigate = useNavigate()

    const popUp = () => {
        return [
            {text:"Profile", img:profile},
            {text:"Settings", img:settings},
            {text:"Notifications", img:bellprofile},
        ].map((item, i) => {
            return(
                <div className={'popup-box'} key={i}>
                    <img src={item.img} alt={"profile-icon"}/>
                    <span>{item.text}</span>
                </div>
            )
        })
    }

    const handleNav = () => {
        navigate('/loginpage', {replace:true})
    }
    return(
        <div className='sidebar-wrapper'>
            <div className='upper-box'>
                <div className='side-logo'>
                    <img src={logo} alt='side-logo'/>
                    <span>Dinomail</span>
                </div>
                { /*
                [
                        {img: img9, title:"Get Started"},
                        {img: img7, title:"Dashboard"},
                        {img: img6, title:"Audience"},
                        {img: img10, title:"Tags"},
                        {img: img8, title:"Campaigns"},
                    ].map((item, key) => {
                        return(
                            <button onClick={handleClick}>
                                <img src={item.img} alt='btn-icon'/>
                                <span>{item.title}</span>
                            </button>
                        )
                    }) 
                    [
                        {img: isClicked ? img9 : img1, title:"Get Started"},
                        {img: img2, title:"Dashboard"},
                        {img: img3, title:"Audience"},
                        {img: img4, title:"Tags"},
                        {img: img5, title:"Campaigns"},
                    ].map((item, key) => {
                        return(
                            <button onClick={handleClick}>
                                <img src={item.img} alt='btn-icon'/>
                                <span>{item.title}</span>
                            </button>
                        )
                    })
                */
                    [
                        {img: img1, img2:img9,title:"Get Started", path: "/getstarted", id:1},
                        {img: img3, img2:img7,title:"Dashboard", path: "/dashboard", id:2},
                        {img: img2, img2:img6,title:"Audience", path: "/audience",id:3},
                        {img: img5, img2:img10,title:"Tags", path: "/tags",id:4},
                        {img: img4, img2:img8,title:"Campaigns", path: "/campaigns",id:5}
                    ].map((item, index) => {
                        const isCurrPath = location.pathname.includes(item.path)
                        return(
                            <Link 
                                to={item.path}
                                key={index}
                                style={isCurrPath ? activePath : null}
                            >
                                <img style={isCurrPath? {visibility:"visible"} : {visibility:'hidden', height:0, width:0}} src={item.img2} alt={""}/>
                                <img style={!isCurrPath? {visibility:"visible"} : {visibility:'hidden',height:0, width:0}} src={item.img} alt={""}/>
                                {/*<img src={isCurrPath ? item.img2 : item.img} alt='btn-icon'/>*/}
                                <span style={isCurrPath ? {color:"#FFFFFF"} : null}>{item.title}</span>
                            </Link>
                        )
                    })
                }
            </div>
            <div className='user-box' style={activePopUpStyle}>
                <div className="popup" style={isOpenPopUp?{display:"block"}: {display:"none"}}>
                    { isOpenPopUp
                        ?
                        popUp()
                        :null
                    }
                    <div className={'logout'}
                         style={isOpenPopUp? {display:"flex"} : {display:"none"}}
                        onClick={handleNav}
                    >
                        <img src={logout} style={{marginLeft:"-2%"}}/>
                        <span style={{color:"#FF5656"}}>Sign out</span>
                    </div>
                </div>
                <div className={'user-container'}>
                    <div className='user-data'>
                        <img src={userimg} alt='dino-user'/>
                        <span>Robert</span>
                    </div>
                    <div className='options'>
                        <img className='dots' src={dots} alt='dots' onClick={handleOpenPopUp}/>
                    </div>
                </div>
            </div>
        </div>
    )
}