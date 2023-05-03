import "./style.scss";
import {useEffect, useState, useCallback, useRef} from "react";
import reversedhead from "../../assets/images/reversed-head.png";
import dinoHead from "../../assets/images/dinoHead.png";
import dinoImg from "../../assets/images/DinoImg.png";
import {Register} from "../../components/registerComponent/Register";
import {Login} from "../../components/loginComponent/LogIn";
import autoAnimate from "@formkit/auto-animate";

export const MainPage = () => {
    const [toggleImg, setToggleImg] = useState(false);
    const [isLeft, setIsLeft] = useState(true);
    const [isRight, setIsRight] = useState();
    const [angle, setAngle] = useState(0);
    const [startAngle, setStartAngle] = useState(0);
    const [currentAngle, setCurrentAngle] = useState(0);
    const [boxCenterPoint, setBoxCenterPoint] = useState({});
    const [show, setShow] = useState(false)

    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
        setShow(true)
    }, [parent])

    const handleToggleImg = () => {
        window.removeEventListener("mousemove", mouseMoveHandler)
        if(toggleImg === true){
            setToggleImg(false)
            setIsLeft(true)
        } else {
            setToggleImg(true)
            setIsLeft(false)
        }
    }
    useEffect(() => {
        window.onmousemove = mouseMoveHandler;
        const boxPosition = box.current.getBoundingClientRect();
        const boxCenterX = boxPosition.left + boxPosition.width / 2;
        const boxCenterY = boxPosition.top + boxPosition.height / 2;
        // update the state
        setBoxCenterPoint({ x: boxCenterX, y: boxCenterY });
    }, [toggleImg])

    const box = useRef(null);

    const getPositionFromCenter = useCallback(
        e => {
            const fromBoxCenter = {
                x: e.clientX - boxCenterPoint.x,
                /* may be x: e.clientX - boxCenterPoint.x/2 */
                y: -(e.clientY - boxCenterPoint.y)
            };
            return fromBoxCenter;
        },
        [boxCenterPoint]
    );
    const mouseMoveHandler = useCallback(
        e => {
            const fromBoxCenter = getPositionFromCenter(e);

            if(toggleImg === true) {
                    const newAngle =
                        260 - Math.atan2(fromBoxCenter.x, fromBoxCenter.y) * (180 / Math.PI);
                    if (Math.abs(currentAngle - (newAngle + (startAngle ? startAngle : 0))) > 320) {
                        box.current.style.transform =
                            "rotate(" +
                            (currentAngle - (newAngle + (startAngle ? startAngle : 0))) +
                            "deg)";
                        setAngle(newAngle);
                        /*
                        if(document.getElementById('box')){
                            box.current.style.transform =
                                "rotate(" +
                                (currentAngle - (newAngle + (startAngle ? startAngle : 0))) +
                                "deg)";
                            setAngle(newAngle);
                        }
                         */
                    }
                }
                if(toggleImg === false) {
                    const newAngle =
                        -10 - Math.atan2(fromBoxCenter.y, fromBoxCenter.x) * (180 / Math.PI);
                    if (Math.abs(currentAngle + (newAngle - (startAngle ? startAngle : 0))) < 50) {
                        /*if(document.getElementById('box')){
                            box.current.style.transform =
                                "rotate(" +
                                (currentAngle + (newAngle - (startAngle ? startAngle : 0))) +
                                "deg)";
                            setAngle(newAngle);
                        } */
                        box.current.style.transform =
                            "rotate(" +
                            (currentAngle + (newAngle - (startAngle ? startAngle : 0))) +
                            "deg)";
                        setAngle(newAngle);
                    }
                }
            return mouseMoveHandler
        },
        [currentAngle, startAngle, getPositionFromCenter, toggleImg]
    );
    useEffect(() => {
        const boxPosition = box.current.getBoundingClientRect();
        const boxCenterX = boxPosition.left + boxPosition.width / 2;
        const boxCenterY = boxPosition.top + boxPosition.height / 2;
        // update the state
        setBoxCenterPoint({ x: boxCenterX, y: boxCenterY });
    }, []);

    useEffect(() => {
        window.onmousemove = mouseMoveHandler;
        return() => window.removeEventListener("mousemove", mouseMoveHandler)
    }, [mouseMoveHandler]);

    return(
        <div className={'mainpage'}
             style={toggleImg? {display:'reverse'} : null}
        >
            <div className={toggleImg  ?'dino-reversed':'dino'} id={'dino'}>
                <div className={`dino-img ${isLeft ? null : 'right'}`} alt={'dino-block'}>
                    <img className={`dino-head`}
                         src={toggleImg ? reversedhead : dinoHead}
                         alt={'head'}
                         ref={box}
                         id={'box'}
                         onMouseMove={mouseMoveHandler}
                    />
                </div>
            </div>

            {toggleImg && show ?
                    <Register onClick={handleToggleImg} toggleImg={toggleImg} ref={parent}/>
                    :
                    <Login onClick={handleToggleImg} toggleImg={toggleImg} ref={parent}/>
            }
        </div>
    )
}