import './header.css'
import ImageHeader from '../../images/undraw_voice_control_ofo1.png'


export default function Header() {
    return (
        <>

       <div className="header container ">

        <div className="img">
        <h1>Student Portal </h1>
       </div>

        <div  className="img">
             <a href='/login'><button className="btn btn-outline-light">Login</button></a>
             <a href='/register'><button className="btn btn-outline-light">Register</button></a>  
       </div>  

      </div>
        </>

    )
}