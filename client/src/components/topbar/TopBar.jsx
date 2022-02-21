import './topbar.css'

import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { publicFile } from '../../shared/baseUrl';


// export default function TopBar() {
//     const {user, dispatch} = useContext(Context);

//     const handleLogout = () =>{
//         dispatch({type:"LOGOUT"});
//     }

//     return (
//         <div className="top">
//             <div className="topLeft">
//                 <i className="topIcon fab fa-facebook-square"></i>
//                 <i className="topIcon fab fa-twitter-square"></i>
//                 <i className="topIcon fab fa-pinterest-square"></i>
//                 <i className="topIcon fab fa-instagram-square"></i>
//             </div>
//             <div className="topCenter">
//                 <ul className="topList">
//                     <li className="topListItem">
//                         <Link to="/" className="link"> HOME </Link>
//                     </li>
//                     <li className="topListItem">
//                         <Link to="/about" className="link"> ABOUT </Link>
//                     </li>
//                     <li className="topListItem">
//                         <Link to="/posts" className="link"> POSTS </Link>
//                     </li>
//                     {user?.role!=='admin'&& <li className="topListItem">
//                         <Link to="/contact" className="link"> CONTACT </Link>
//                     </li>}
//                     {user?.role==='admin'&& <li className="topListItem">
//                         <Link to="/write" className="link"> WRITE </Link>
//                     </li>}
//                     <li className="topListItem" onClick={handleLogout}>
//                         {user && "LOGOUT"}
//                     </li>
//                 </ul>
//             </div>
            // <div className="topRight">
            //     {
            //         user ? (
            //             <Link to="/settings" className="link">
            //                 <img 
            //                 className="topImg"
            //                 src={publicFile+user.profilePic} 
            //                 alt="" 
            //                 />
            //             </Link>
            //         ) : (
            //             <ul className="topList">
            //                 <li className="topListItem"><Link to="/login" className="link"> LOGIN </Link></li>
            //                 <li className="topListItem"><Link to="/register" className="link"> REGISTER </Link></li>
            //             </ul>
            //         )
            //     }
            //     <i className="topSearchIcon fas fa-search"></i>
            // </div>
//         </div>
//     )
// }

import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {

    const {user, dispatch} = useContext(Context);

        const handleLogout = () =>{
            dispatch({type:"LOGOUT"});
        }
  return (
      
    <Menu>
     <div>
                {
                    user ? (
                        <Link to="/settings" className="nav-item">
                            <img 
                            className="topImg"
                            src={publicFile+user.profilePic} 
                            alt="" 
                            />
                        </Link>
                    ) : (

                        <div>
                        <ul>
                            <li className="topListItem"><Link to="/login" className="nav-item"> LOGIN </Link></li>
                        </ul>

                        <ul >
                        <li className="topListItem"><Link to="/register" className="nav-item"> REGISTER </Link></li>
                        </ul>
                        </div>
                    )
                }
               
            </div>
     
     <ul>
      <li><Link to="/" className="nav-item"> HOME </Link></li>
     </ul>
      
     
     <ul>
     <li><Link to="/about" className="nav-item"> ABOUT </Link></li>
     </ul>
      
      
      
      <ul>
     <li><Link to="/posts" className="nav-item"> POSTS </Link></li> 
      </ul>
      
      <ul>
      {user?.role!=='admin'&& <li className="topListItem">
                         <Link to="/contact" className="nav-item"> CONTACT </Link>
                     </li>}
      </ul>
      <ul>
      {user?.role==='admin'&& <li className="topListItem">
                        <Link to="/write" className="nav-item"> WRITE </Link>
                   </li>}
      </ul>

      <ul>
      {user?<li className="topListItem" onClick={handleLogout}>
         <Link to='/' className='nav-item'>{user && "LOGOUT"}</Link>
     </li>:(null)}
     
      </ul>
      
     
    </Menu>
  );
};

