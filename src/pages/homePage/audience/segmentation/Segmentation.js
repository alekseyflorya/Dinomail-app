import './style.scss';
import arrow from "../../../../assets/images/leftArrGreen.png";
import { useNavigate, useParams } from "react-router-dom";
import audience from "../../../../assets/images/audienceicon.png";
import ProgressBar from "../../../../components/progressBar/ProgressBar";
import sub from "../../../../assets/images/subs.png";
import chat from "../../../../assets/images/chat.png";
import magnet from "../../../../assets/images/magnet.png";
import eye from "../../../../assets/images/closedeye.png";
import team from "../../../../assets/images/team.png";
import Dropdown from './dropdown/dropdown';
import { useState } from 'react';
import './style.scss';
import close from "../../../../assets/images/xmark.png";

export const Segmentation = () => {
    const [input, setInput] = useState('');
    const [tags, setTags] = useState([]);
    const [isKeyReleased, setIsKeyReleased] = useState(false);

    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = input.trim();
        if (key === ','  && trimmedInput.length && !tags.includes(trimmedInput)) {
          e.preventDefault();
          setTags(prevState => [...prevState, trimmedInput]);
          setInput('');
        }
        if (key === 'Enter'  && trimmedInput.length && !tags.includes(trimmedInput)) {
            e.preventDefault();
            setTags(prevState => [...prevState, trimmedInput]);
            setInput('');
        }
        if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
          const tagsCopy = [...tags];
          const poppedTag = tagsCopy.pop();
          e.preventDefault();
          setTags(tagsCopy);
          setInput(poppedTag);
        }
        setIsKeyReleased(false);
    };
    console.log(tags, "tags")
      
    const onKeyUp = () => {
        setIsKeyReleased(true);
    }

    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
    };

    const handleAddSuggestion = (item) => {
        setTags(prevState => [...prevState, item.target.outerText.slice(0, -2)])
        console.log(item, "item")
    }

    const deleteTag = (index) => {
        setTags(prevState => prevState.filter((tag, i) => i !== index))
    }
    let {id} = useParams()
    const navigate = useNavigate()

    const options = [
        { img: sub, label: "Subscribers", value: 1},
        { img: chat, label: "SMS subscribers" , value: 2},
        { img: magnet, label: "Engaged subscribers" , value: 3},
        { img: eye, label: "Sleeping subscribers", value: 4 },
        { img: team, label: "My team", value: 5 },
    ];

    const handleNav = () => {
        navigate('/audience/upload', {replace:true})
    }

    return(
        <div className="segment-wrapper" id={id}>
            <div className='header'>
                <div className='content-box'>
                    <div className='route-status'>
                        <img src={audience} alt="header-audience"/>
                        <span>Audience / <p>Add contacts via file</p></span>
                    </div>
                </div>
            </div>
            <div className='inner-box'>
                <div className='upload-group'>
                    <button className='back' onClick={handleNav}>
                        <img src={arrow}/>
                        <span>Back</span>
                    </button>
                    <button className='save-as-draft'>
                        <span>Save as draft</span>
                    </button>
                    <button className='continue'>
                        <span>Continue</span>
                    </button>
                </div>
                <div className="pg-bars">
                    <div className="progress-bar-upload">
                        <h1>Upload the file</h1>
                        <ProgressBar bgcolor="#EDB833" completed={100} className="progress-bar"/>
                    </div>
                    <div className="progress-bar-segmentation">
                        <h1>Segmentation</h1>
                        <ProgressBar bgcolor="#EDB833" completed={100} className="progress-bar"/>
                    </div>
                </div>
                <div className='segm-group'>
                    <div className='tips'>
                        <ul>
                            <li>
                                Tagging will help you sort and search
                                your contacts by categories and criteria more conveniently
                            </li>
                            <li>
                                You must add some category for your contacts
                            </li>
                        </ul>
                    </div>
                    <div className='upload-group'>
                        {/*REPEATED CLASSNAME*/}
                        <button className='back'>
                            <img src={arrow}/>
                            <span>Back</span>
                        </button>
                        <button className='save-as-draft'>
                            <span>Save as draft</span>
                        </button>
                        <button className='continue'>
                            <span>Continue</span>
                        </button>
                    </div>
                </div>
                <div className='selection'>
                    <div className='tags'>
                        <label>Search for or create tags</label>
                        <div className="container">
                            {tags.map((tag, index) => (
                                <div className="tag">
                                    <span>{tag}</span>
                                        <img src={close} alt='x' onClick={() => deleteTag(index)}/>
                                </div>
                            ))}
                            <input
                                className='container-input'
                                value={input}
                                placeholder={tags.length >= 1 ? "" : "Start typing to add a custom tag"}
                                onKeyDown={onKeyDown}
                                onKeyUp={onKeyUp}
                                onChange={onChange}
                            />
                        </div>
                        {/*
                        <input
                            type='text'
                            placeholder='Start typing to add custom tag'
                            <span> customer, </span>
                            <span>passive, </span>
                            <span>active, </span>
                            <span>user, </span>
                            <span>important, </span>
                            <span>general, </span>
                            <span>shared, </span>
                            <span>banned, </span>
                            <span>subscriber, </span>
                            <span>potential</span>
                        />
                        */}
                        <p>Suggested tags:
                            {
                                [
                                    {text:" customer,"},
                                    {text:" passive,"},
                                    {text:" active,"},
                                    {text:" user,"},
                                    {text:" important,"},
                                    {text:" general,"},
                                    {text:" shared,"},
                                    {text:" banned,"},
                                    {text:" subscriber,"},
                                    {text:" potential,"},
                                ].map((item, index) => {
                                    return(
                                        <span 
                                            key={index}
                                            onClick={handleAddSuggestion}
                                        >
                                            {item.text} </span>
                                    )
                                })
                            }
                        </p>
                    </div>
                    <div className='dropdown'>
                        <label>Select group</label>
                        <Dropdown 
                            options={options}
                            onChange={(value) => console.log(value.img)}
                            placeHolder={"Not selected yet"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}