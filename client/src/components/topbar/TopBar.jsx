import './topbar.css'

import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { publicFile } from '../../shared/baseUrl';


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
      {user?.role==='admin'&& <li className="topListItem">
                        <Link to="/write" className="nav-item">ADMIN PANEL</Link>
                   </li>}
      </ul>
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
      {user?<li className="topListItem" onClick={handleLogout}>
         <Link to='/' className='nav-item'>{user && "LOGOUT"}</Link>
     </li>:(null)}
     
      </ul>
      
     
    </Menu>
  );
};

