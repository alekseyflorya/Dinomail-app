import './style.scss';

export const Navbar = () => {
    return(
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
    )
}