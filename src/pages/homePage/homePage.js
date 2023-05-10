import { Sidebar } from '../../components/sidebar/Sidebar';
import { GetStarted } from './getStarted/getStarted';
import dropdown from "../../assets/images/shevrone.png";
import audience from "../../assets/images/audienceicon.png";
import './style.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from 'react-bootstrap';


export const HomePage = () => {

    return(
        <div className={'homepage'}>
            <Navbar/>
            <Sidebar/>
        </div>
    )
}