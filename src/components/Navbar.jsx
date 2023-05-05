import React  from 'react'
import { useRef } from 'react';
import Button from './Button'
import './Navbar.css'
import Typed from 'react-typed';
import {AiOutlineAlignRight} from 'react-icons/ai'
import {RiCloseLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';
import {AiFillLinkedin} from 'react-icons/ai'
import{AiOutlineInstagram} from 'react-icons/ai'
import{AiFillFacebook} from 'react-icons/ai'
import{BsTwitter} from'react-icons/bs'





//NAVBAR
const Navbar = () => {
const menuref = useRef()

const overmenuac = (e) =>{
 const klikelemenet = e.target

 if(klikelemenet.classList.contains('icon-nav')){
  menuref.current.classList.add('aktiv')
 }
}
 const overbagla = (e) =>{
  const klikelemenet = e.target
 
  if(klikelemenet.classList.contains('icon-close')){
   menuref.current.classList.remove('aktiv')
  }
 }


 





  return (
    <>
     
     {/* overley menu */}
     <div className="overleymenu" ref={menuref}>
    <button className='icon-close'  onClick={overbagla}>  <RiCloseLine  className='sus'/></button>

          <div className="over-links">
        

        <ul>
        <li><a href="/" >Home</a ></li>
         <li><a  href="/about">About</a></li>
        <li><a href="/cv">My CV</a></li>
        <li><a href="/Skils">Skils</a></li>
        <li><a href="/contact">Contact</a></li>
          
          </ul>
          <div className="over-icons">
          <a href="https://www.linkedin.com/check/verify-phone"><AiFillLinkedin  className='overicons'/></a> 
               <a href="https://www.instagram.com/burxan.hasanli/"> <AiOutlineInstagram  className='overicons'/></a>
               <a href="https://www.facebook.com/burxan.hesenli.3"><AiFillFacebook  className='overicons'/></a>
             <a href="https://twitter.com/Burxan_Hasanli">  <BsTwitter  className='overicons'/></a> 
            </div>
          </div>
      </div>
    {/* navbar */}

   
   
    <div className="navbar">
    
      
    <nav>
    
    <ul>
    
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#Skils">Skils</a></li>
        <li><a href="#Contact">Contact</a></li>
    </ul>  

    </nav>
   <button className='icon-nav' onClick={overmenuac}> <AiOutlineAlignRight  className='sus'  /> </button>
    
      
              {/* content type text */}
         <div className="content">
        
         <Typed className='typingtext'
                strings={[
                    'l am . . .              ',
                    'l am Developer',]}
                    typeSpeed={70}
                    backSpeed={50}
                    
                    loop >
                    
                </Typed>
          <h1>Hasanli <span>Burxan</span></h1>
         
          <Link to="/Cv" target="_blank" className="contentbtn">
            <Button butonicindekiyazi="See My CV"classadi="buttons" />
          </Link>
         </div>

    </div>
      
    
    </>
  )
}

export default Navbar