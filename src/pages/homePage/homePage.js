import { Sidebar } from '../../components/sidebar/Sidebar';
import { GetStarted } from './getStarted/getStarted';
import dropdown from "../../assets/images/shevrone.png";
import audience from "../../assets/images/audienceicon.png";
import './style.scss';

export const HomePage = () => {

    return(
        <div className={'homepage'}>
            <div className='header'>
                <div className='content-box'>
                    <div className='route-status'>
                        <img src ={audience} alt="header-audience"/>
                        <span>Audience</span>
                    </div>
                    <button>
                        <span>Add contacts</span>
                        <img src={dropdown} alt="header-dropdown"/>
                    </button>
                </div>
            </div>
            <Sidebar/>
            {
                <GetStarted/>
            }
        </div>
    )
}