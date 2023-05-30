import './style.scss';
import arrow from "../../../assets/images/greenArrowDown.png";
import search from "../../../assets/images/search.png";
import EnhancedTable from './table/Table';

export const Tags = () => {
    return(
        <div className='tags-wrapper'>
            <div className='header'>
                <div className='content-box'>
                    <div className='route-status'>
                        <div className="manual-routes">
                            <span>#Tags /</span>
                            <p> #passive</p>
                        </div>
                    </div>
                    <div className="btns">
                        <button className='back'>
                            <span>Add contacts</span>
                            <img src={arrow} alt="greenArrow"/>
                        </button>
                            {/*
                            <button 
                                className={"transparent"} 
                                disabled
                                >
                                <span>Next</span>
                            </button>
                            */}
                            <button 
                                className={"filled"} 
                                >
                                <span>Create tag</span>
                            </button>
                    </div>
                </div>
            </div>
            <div className='tags-content'>
                <div className='navigation'>
                    <h1>#Tags</h1>
                    <div className='filter-component'>
                        <div className='description'>
                            <p>
                                Add tags to your contacts to segment and personalize your messages. 
                                Tags also help create more targeted campaigns.
                            </p>
                            <div className='search-input'>
                                <input
                                    placeholder='Email, name, address, etc...'
                                />
                                <img src={search}/>
                            </div>
                        </div>
                    </div>
                </div>
                <EnhancedTable/>
            </div>
        </div>
    )
}