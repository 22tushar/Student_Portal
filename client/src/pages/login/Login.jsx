import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import "./login.css"
import loginimage from '../../images/loginimage.png'
// import { SignInWithGoogle } from "../../firebase";
export default function Login() {
    const userRef= useRef()
    const passwordRef = useRef()
    const { dispatch, isFetching} = useContext(Context)

    const [error, setError] = useState(false)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError(false)
        dispatch({type:"LOGIN_START"});
        
        await axios.post("/auth/login",{
            username:userRef.current.value,
            password:passwordRef.current.value,
        })
        .then((res)=>{
            dispatch({type:"LOGIN_SUCCESS", payload:res.data});
        })
        .catch((err)=>{
            dispatch({type:"LOGIN_FAILURE"});
            setError(true)
        })
    }

    
    
    return (
        <div className="login">

            <div class="container">
                <div class="row">
                    
                    <div class="col">
                        
                        <form className="loginForm" onSubmit={handleSubmit}>
                        <span className="loginTitle">Login</span>
                            <label>Organisation</label>
                            <input type="text" className="loginInput" placeholder="Enter your organisation..." 
                            ref={userRef} autoFocus/>

                            <label>Password</label>
                            <input type="password" className="loginInput" placeholder="Enter your password..."
                            ref={passwordRef} />

                            <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
                            <button className="loginButton" type="submit" disabled={isFetching}>Login With Google</button>
                        </form>
                       
                        {error?(alert("Something went wrong")):(null) }

                    </div>
     
                </div>
            </div>

        </div>
    )
}
