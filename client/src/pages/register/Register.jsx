import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./register.css"
import registerimage from '../../images/registerimage.png'

export default function Register() {
    const [username, setUsername] = useState("")
    const [role, setrole] = useState("TPO")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)


    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError(false)
        await axios.post("/auth/register",{
            username,
            role,
            email,
            password,
        })
        .then((res)=>{
            if (res.data){
                window.location.replace("/login");
                console.log(res.data);
            }
        })
        .catch((err)=>{
            setError(true)
            // console.log(err);
        });
    }

    return (
        <div className="register">
            

            <div class="container">
                <div class="row">
                
                    <div class="col">
                    
                        <form className="registerForm" onSubmit={handleSubmit}>
                        <span className="registerTitle">Register</span>

                        <label>username</label>
                        <input type="text" className="registerInput" placeholder="Enter your organisation..." 
                        onChange={e=> setUsername(e.target.value)} autoFocus/>
                        
                        <label>Email</label>
                        <input type="text" className="registerInput" placeholder="Enter your email..." 
                        onChange={e=> setEmail(e.target.value)}/>

                        <label>Password</label>
                        <input type="password" className="registerInput" placeholder="Enter your password..."
                        onChange={e=> setPassword(e.target.value)}/>

                        <button className="registerButton" type="submit">Register</button>
                        </form>

                        {error? (<span style={{color:"red", marginTop:"15px"}}> Something went wrong! </span>):(null) }

                    </div>
                </div>
            </div>


        </div>
    )
}
