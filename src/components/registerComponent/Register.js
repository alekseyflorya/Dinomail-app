import "./style.scss";
import dinomark from "../../assets/images/loginLogo.png";
import dinologo from "../../assets/images/Subtract.png";
import eye from "../../assets/images/eye.png";
import slasheye from "../../assets/images/eyeslash.png";
import alert from "../../assets/images/alert_circle.png";
import google from "../../assets/images/Google.png";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import autoAnimate from "@formkit/auto-animate";

export const Register = ({onClick, toggleImg}) => {
    const [passwordReg, setPasswordReg] = useState({value:"", error:""});
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
        navigate('/homepage', {replace:true})
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
        if(!passwordReg.value) {
            setPasswordReg({value: "", error: "Please, enter a password"})
            isError = true;
        }
        if(passwordReg.value.length < 8){
            isError = true
            setPasswordReg({value: "", error: "Your password must contain at least 8 characters"})
        }
        if(!isError){
            setPasswordReg({value:"", error:""});
            setEmail({value: "", error: ""})
            setIsSubmit(true);
            handleNav();
        }
        console.log(isError, "error")
    }
    console.log(isSubmit, "submit")

    const handleChangePass = (e) => {
        setPasswordReg({value: e.target.value, error: ""});
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
        <div className={'reg-wrapper'} ref={parentRef}>
            {show &&
                <>
                    <div className={'register'}>
                        <img src={dinomark} alt={'mark'} className={'mark'}/>
                        <div className={'logo'}>
                            <img src={dinologo} alt={'logo'}/>
                            <h3 className={'dinomail'}>Dinomail</h3>
                        </div>
                        <h1 className={'form-title'}>
                            Sign up for Dinomail
                        </h1>
                        <form className={'reg-form'} onSubmit={handleSubmit}>
                            <div className={'email'}>
                                <span className={'reg-email-label'}>Email address</span>
                                <input
                                    placeholder={'yourname@mail.com'}
                                    onChange={handleChangeEmail}
                                    value={email.value}
                                    type={'text'}
                                    className={'reg-email-field'}
                                />
                            </div>
                            <div className={'pass'}>
                                <label>Password</label>
                                <div className={'pass-input'}>
                                    <input
                                        value={passwordReg.value}
                                        type={passwordShown ? "text" : 'password'}
                                        onChange={handleChangePass}
                                        placeholder={'Enter your password'}
                                        className={'reg-pass-field'}
                                    />
                                    <img
                                        onClick={togglePassword}
                                        src={passwordShown ? slasheye : eye} alt={'eye'} className={'eye'}/>
                                </div>
                                <p  className={!isSubmit ? "error-show" : "error-hide"}
                                    style={!isSubmit? {display:"flex"} : {display:"none"}}
                                >{passwordReg.error || email.error}</p>
                                <div className={'privacy'}>
                                    <img src={alert} alt={'alert'}/>
                                    <p>Please pay attention, by clicking on the “Sign up” button you’re
                                        agreeing with or <a>Privacy Policy</a> and <a>Terms and Conditions.</a></p>
                                </div>
                            </div>
                            <button
                                className={isFilled ? 'sign-in' : "sign-disabled"}
                                onClick={isSubmit ? handleNav : null}
                                disabled={!isFilled}
                            >
                                <span>Sign In</span>
                            </button>
                            <div className={'alter-login'}>
                                <hr/>
                                <span>Or</span>
                                <hr/>
                            </div>
                            <button className={'google-login'}>
                                <img src={google} alt={"google"}/>
                                <p>Continue with Google</p>
                            </button>
                        </form>
                    </div>
                    <span className={'log-in'}>Already have an account?
                        <p onClick={onClick} onToggle={() => toggleImg}>Log In</p>
                    </span>
                </>
            }
        </div>
    )
}