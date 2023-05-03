import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {MainPage} from "./pages/mainPage/mainPage";
import {HomePage} from "./pages/homePage/homePage";
import {useEffect} from 'react';

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
              <Routes>
                  <Route path={'/'} element={<MainPage/>}/>
                  <Route path={'/homepage'} element={<HomePage/>}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
