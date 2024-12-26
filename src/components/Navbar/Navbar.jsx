import React,{useEffect, useRef} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase';


function Navbar() {

  const navRef = useRef()
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      
      if(window.scrollY >=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div className='Navbar' ref={navRef}>
        <div className="navbar-left">
            <img src={logo} alt="logo" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>

        </div>
        <div className="navbar-right">
            <img src={search_icon} alt="icon" className='icons' />
            <p>children</p>
            <img src={bell_icon} alt="icon" className='icons' />
            <div className="navbar-profile">
            <img src={profile} alt="icon" className='navbar-profile'/>
            <img src={caret_icon} alt="icon" />
            <div className="dropDown">
             <p onClick={()=>{logout()}}>Sign Out of Netflix</p> 
            </div>

            </div>
        </div>


    </div>
  )
}

export default Navbar