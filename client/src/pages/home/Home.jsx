import { useState, useEffect} from 'react'
import axios from 'axios'
import Sidebar from '../../components/sidebar/Sidebar'

// import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'

import './home.css'
import { useLocation } from 'react-router'

import Image from '../../images/icons8-education-64.png'


export default function Home() {
    const [posts,setPosts] = useState([]);
    const {search} = useLocation();


    useEffect(()=>{
        const fetchPosts = async ()=>{
            await axios.get("/posts"+search)
            .then(res=>{
                setPosts(res.data);
            }).catch(err=>{
                console.log(err);
            })
        }
        fetchPosts()
    },[search])

    return (
        <>
        {/* <Header /> */}
        <div className="home-header">
            
              
              <div className='portal'>
             <img src={Image}/> &nbsp;&nbsp;&nbsp;&nbsp;
              <p>Student Portal</p>
             </div>
            <div className="home">

            <Posts posts={posts} />
            <div className='sidebar'>
             <Sidebar />
            </div>

            </div>
        </div>
        </>
    )
}
