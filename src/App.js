import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {MainPage} from "./pages/mainPage/mainPage";
import {HomePage} from "./pages/homePage/homePage";
import {useEffect} from 'react';
import { GetStarted } from './pages/homePage/getStarted/getStarted';
import { Sidebar } from './components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import { Audience } from './pages/homePage/audience/audience';
import { Upload } from './pages/homePage/audience/uploadFile/Upload';

function App() {

    const loader = document.querySelector(".loader-wrapper");
    const showLoader = () => loader.classList.remove("loader-wrapper");
    const addClass = () => loader.classList.add("loader-hide");

    useEffect(() => {
        window.addEventListener('load', addClass);
        return () => window.removeEventListener('load', addClass);
    },[addClass])

  return (
      <Router>
          <div className={'App'}>
              <Sidebar/>
              <Routes>
                  <Route path={'/loginpage'} element={<MainPage/>}/>
                  <Route path={'/'} element={<HomePage/>}/>
                  <Route path={'/getstarted'} element={<GetStarted/>}/>
                  <Route path={'/audience'} element={<Audience/>}/>
                  <Route path={'/audience/:id'} element={<Upload/>}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
