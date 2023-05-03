import dinomark from "../../assets/images/loginLogo.png";
import dinologo from "../../assets/images/Subtract.png";
import eye from "../../assets/images/eye.png";
import slasheye from "../../assets/images/eyeslash.png";
import google from "../../assets/images/Google.png";
import {useState} from "react";
import "./style.scss";

export const TestLogin = ({onClick, toggleImg}) => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }

    const togglePassword =()=>{
        if(passwordType==="password")
        {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    return(
        <div className={'login-wrapper'}>
            <div className={'login'}
            >
                <img src={dinomark} alt={'mark'} className={'mark'}/>
                <div className={'logo'}>
                    <img src={dinologo} alt={'logo'}/>
                    <h3>Dinomail</h3>
                </div>
                <h1 className={'form-title'}>
                    Glad you’re back!
                    Sign in to continue.
                </h1>
                <div className={'form'}>
                    <div className={'email'}>
                        <span>Email address</span>
                        <input placeholder={'yourname@mail.com'}/>
                    </div>
                    <div className={'pass'}>
                        <label>Password</label>
                        <div className={'pass-input'}>
                            <input
                                value={passwordInput}
                                type={passwordType}
                                onChange={handlePasswordChange}
                                placeholder={'Enter your pass'}
                            />
                            <img
                                onClick={togglePassword}
                                src={passwordType==="password" ? eye : slasheye} alt={'eye'} className={'eye'}/>
                        </div>
                        <div className={'radio-btn'}>
                            <input id="html" type="checkbox"/>
                            <span>Keep me logged in</span>
                        </div>
                    </div>
                    <button  className={'sign-in'}>
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
                </div>
            </div>
            <span className={'sign-up'}>Not registered yet?
                    <p onClick={onClick} onToggle={() => toggleImg}>Sign Up</p>
                </span>
        </div>
    )
}