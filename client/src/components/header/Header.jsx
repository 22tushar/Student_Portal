import './header.css'
import ImageHeader from '../../images/undraw_voice_control_ofo1.png'


export default function Header() {
    return (
        <>

<div className="header container">
            <div className="row justify-content-center">
                    <div className="Title col-md-5">
                        Student Portal
             <div  className="img col-md-7">
             <a href='/login'><button className="btn btn-outline-danger">Login</button></a>
                  <a href='/register'><button className="btn btn-outline-danger">Register</button></a>  
             </div>   
                    </div>
            </div>
        <div  className="img justify-content-center" >
             <img
            className="headerImg" 
            src={ImageHeader}
            alt="" />   
             </div>     
        </div>
       
        

        </>

    )
}