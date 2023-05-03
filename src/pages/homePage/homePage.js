import './style.scss';
import { useNavigate } from "react-router-dom";

export const HomePage = () => {

    const navigate = useNavigate()

    const handleNav = () => {
        navigate('/', {replace:true})
    }

    return(
        <div className={'homepage'}>
            <h1>HOMEPAGE</h1>
            <button onClick={handleNav}>
                BACK
            </button>
        </div>
    )
}