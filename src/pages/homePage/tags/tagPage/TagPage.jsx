import arrow from "../../../../assets/images/greenArrowDown.png";
import pencil from "../../../../assets/images/tagEdit.png";
import arrowUp from "../../../../assets/images/greenArrowUp.png";
import search from "../../../../assets/images/search.png";
import tuning from "../../../../assets/images/tuningTag.png";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import './style.scss';
import  TableContact  from "./currTagTable/tagTable";

export const TagPage = () => {
    const [isClicked, setIsClicked] = React.useState(false);
    const navigate = useNavigate()

    const handleNavBack = () => {
        navigate('/tags/', {replace:true})
    }

    const handleClick = () => {
        setIsClicked(true)
        if(isClicked){
            setIsClicked(false)
        }
    }

    const pathname = window.location.pathname;
    let appId = pathname.split('/')[2];

    return(
        <div className="curr-tag">
            <div className='header'>
                <div className='content-box'>
                    <div className='route-status'>
                        <div className="manual-routes">
                            <span onClick={handleNavBack}>#Tags /</span>
                            <p>#{appId}</p>
                        </div>
                    </div>
                    <div className="btns">
                        <button className='back' onClick={handleClick}>
                            <span>Add contacts</span>
                            <img src={isClicked ? arrowUp: arrow} alt="greenArrow"/>
                        </button>
                        <button className='back'>
                            <span>Create new campaign</span>
                        </button>
                        <button 
                            className={"filled"} 
                            >
                                <span>Save and close</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='tag-box'>
                <div className='navigation'>
                    <div className="nav-title">
                        <h1>#{appId}</h1>
                        <img src={pencil} alt="pencil"/>
                    </div>
                    <div className='filter-component'>
                        <span>Tag includes 390 contacts</span>
                        <div className='search-input'>
                            <input
                                    placeholder='Email, name, address, etc...'
                            />
                            <img src={search} alt="tag-search"/>
                        </div>
                        <img src={tuning} alt="tag-tune" className="tune"/>
                    </div>
                </div>
                <TableContact/>
            </div>
        </div>
    )
}