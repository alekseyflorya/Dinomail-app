import './style.scss';
import arrow from "../../../assets/images/greenArrowDown.png";
import search from "../../../assets/images/search.png";
import EnhancedTable from './table/Table';
import {useState, useEffect,useRef} from "react";
import hashtagactive from "../../../assets/images/inputHashActive.png";
import hashtagicon from "../../../assets/images/inputHash.png";
import { rows } from './table/Table';
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../../../utils/actionCreators/tagAction";

export const Tags = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isText, setIsText] = useState(false)
    const [rowTag, setAddTag] = useState(rows)
    const [rowDeleteTag, setDeleteTag] = useState(rows)
    const [inputTag, setInputTag] = useState("")

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log("store", state)

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleChangeInput = (e) => {
        setInputTag({name: e.target.value})
        setIsText(true)
    }
    
    const handleAddTag = () => {
        setAddTag(prevState => [...prevState, inputTag])
        console.log(rows, "setRows")
        setIsOpen(false)
        dispatch(addItem(rowTag))
        console.log(rowTag, "parent rowTag")
    }

    const handleDeleteTag = () => {
        setDeleteTag(prevState => [...prevState.pop()])
        console.log(rows, "setRows")
        setIsOpen(false)
        dispatch(deleteItem(rowTag))
        console.log(rowTag, "parent rowTag")
    }
    
    return(
        <div className='tags-wrapper'>
            <div className='header'>
                <div className='content-box'>
                    <div className='route-status'>
                        <div className="manual-routes">
                            <span>#Tags </span>
                        </div>
                    </div>
                    <div className="btns">
                        <button className='back'>
                            <span>Add contacts</span>
                            <img src={arrow} alt="greenArrow"/>
                        </button>
                        <button 
                            className={"filled"} 
                            onClick={handleOpenModal}
                            >
                                <span>Create tag</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={isOpen ? "modal-tag" : 'modal-hide'}>
                <div className="modal-window-tag">
                <h1 className='modal-tag-title'>Create new tag</h1>
                <span>Tag name</span>
                <div className='input-box'>
                    <img src={isText ? hashtagactive : hashtagicon} alt="hash-tags"/>
                    <input
                        onChange={handleChangeInput}
                        className='create-input'
                        placeholder={`Enter tag name`}
                    />
                </div>
                <div className="btns-tag">
                    <button className="btn1" onClick={() => {setIsOpen(false)}}>
                        <span>Cancel</span>
                    </button>
                    <button 
                        className="btn2" 
                        onClick={handleAddTag}
                        disabled={!isText}
                        >
                        <span>Create</span>
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
                <EnhancedTable handleAddTag={handleAddTag} rowTag={rowTag} handleDeleteTag={handleDeleteTag}/>
            </div>
        </div>
    )
}