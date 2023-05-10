import dinomark from "../../assets/images/loginLogo.png";
import dinologo from "../../assets/images/Subtract.png";
import eye from "../../assets/images/eye.png";
import slasheye from "../../assets/images/eyeslash.png";
import google from "../../assets/images/Google.png";
import { useNavigate } from "react-router-dom";
import autoAnimate from "@formkit/auto-animate";
import { useState, useRef, useEffect } from 'react';
import "./style.scss";

export const Login = ({onClick, toggleImg}) => {
    const [password, setPassword] = useState({value:"", error:""});
    const [email, setEmail] = useState({value:"", error:""});
    const [passwordShown, setPasswordShown] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isFilled, setisFilled] = useState(false);
    const [show, setIsShow] = useState(false)

    const parentRef = useRef();

    useEffect(() => {
        if (parentRef.current) {
            autoAnimate(parentRef.current);
        }
        setIsShow(true)
    }, [parentRef]);

    const navigate = useNavigate();
    const handleNav = () => {
        navigate('/homepage/getstarted', {replace:true})
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        let isError = false
        if(!email.value) {
            setEmail({value:'', error: "Email is require"})
            isError = true
        }
        if(email.value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.value)){
            isError = true
            setEmail({value:"", error: "Email incorrect"})
        }
        if(!password.value) {
            setPassword({value: "", error: "Please, enter a password"})
            isError = true;
        }
        if(password.value.length < 8){
            isError = true
            setPassword({value: "", error: "Your password must contain at least 8 characters"})
        }
        if(!isError){
            setPassword({value:"", error:""});
            setEmail({value: "", error: ""})
            setIsSubmit(true);
            handleNav();
        }
        console.log(isError, "error")
    }

    const handleChangePass = (e) => {
        setPassword({value: e.target.value, error: ""});
        setisFilled(true)
    }
    const handleChangeEmail = (e) => {
        setEmail({value: e.target.value, error: ""})
        setisFilled(true)
    }
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return(
        <div className={'login-wrapper'} ref={parentRef}>
            {
                show &&
                <div>
                    <div className={'login'}>
                        <img src={dinomark} alt={'mark'} className={'mark'}/>
                        <div className={'logo'}>
                            <img src={dinologo} alt={'logo'}/>
                            <h3>Dinomail</h3>
                        </div>
                        <h1 className={'form-title'}>
                            Glad you’re back!
                            Sign in to continue.
                        </h1>
                        <form className={'form'} onSubmit={handleSubmit}>
                            <div className={'email'}>
                                <span className={'email-span'}>Email address</span>
                                <input
                                    className={'email-input'}
                                    placeholder={'yourname@mail.com'}
                                    type={"text"}
                                    value={email.value}
                                    onChange={handleChangeEmail}
                                />
                            </div>
                            <div className={'pass'}>
                                <label>Password</label>
                                <div className={'pass-input'}>
                                    {
                                        passwordShown?
                                            <input
                                                className={'pass-field'}
                                                value={password.value}
                                                type={"text"}
                                                onChange={handleChangePass}
                                                placeholder={'Enter your password'}
                                            />
                                            :
                                            <input
                                                className={'pass-field-alt'}
                                                value={password.value}
                                                type={'password'}
                                                onChange={handleChangePass}
                                                placeholder={'Enter your password'}
                                            />
                                    }
                                    <img
                                        onClick={togglePassword}
                                        src={passwordShown ? slasheye : eye} alt={'eye'} className={'eye'}/>
                                </div>
                                <p  className={!isSubmit ? "error-show" : "error-hide"}
                                    style={!isSubmit? {display:"flex"} : {display:"none"}}
                                >{password.error || email.error}</p>
                                <div className={'radio-btn'}>
                                    <input id="html" type="checkbox"/>
                                    <span>Keep me logged in</span>
                                </div>
                            </div>
                            <button
                                onClick={isSubmit ? handleNav : null}
                                disabled={!isFilled}
                                className={isFilled ? 'sign-in' : "sign-disabled"}>
                                <span>Sign In</span>
                            </button>
                            <div className={'alter-login'}>
                                <hr/>
                                <span>Or</span>
                                <hr/>
                            </div>
                            <button className={'google-login'}>
                                <img src={google} alt={"google"}/>
                                <span>Continue with Google</span>
                            </button>
                        </form>
                    </div>
                    <span className={'sign-up'}>Not registered yet?
                        <p onClick={onClick} onToggle={() => toggleImg}>Sign Up</p>
                    </span>
                </div>
            }
        </div >
    )
}