import React,{useRef} from 'react'
import './Contact.css'
import {AiFillLinkedin} from 'react-icons/ai'
import{AiOutlineInstagram} from 'react-icons/ai'
import{AiFillFacebook} from 'react-icons/ai'
import{BsTwitter} from'react-icons/bs'
import Button from './Button'
import emailjs from '@emailjs/browser';



const Contact = () => {
  const formref = useRef()

  const sendemail = (e) => {
    e.preventDefault();

    const serviceid = "service_kxro5we"
    const templateid = "template_jsu4qbf"
    const PUBLIC_KEY ="nJUZl_9UE7nxMClDi"


    emailjs.sendForm(serviceid, templateid, formref.current, PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <>
    <div className="Contact " id='Contact'>
        <div className="contact-text">
            <h1>Contact <span>Me</span></h1>
            <h4>Let's Work Together</h4>
            <p>. </p>
            <div className="contact-list">
                <li><a href="#"></a>Burxan-Hasanli-Azerbaijan</li>
                <li><a href=''>burxanhesenlin@gmail.com</a></li>
                <li><a href="#"></a>+994518798888</li>
            </div>
            <div className="contact-icons">
               <a href="https://www.linkedin.com/check/verify-phone"><AiFillLinkedin  className='contacticons'/></a> 
               <a href="https://www.instagram.com/burxan.hasanli/"><AiOutlineInstagram  className='contacticons'/></a>
               <a href="https://www.facebook.com/burxan.hesenli.3"><AiFillFacebook  className='contacticons'/></a>
             <a href="https://twitter.com/Burxan_Hasanli"><BsTwitter  className='contacticons'/></a> 
            </div>

        </div>
        <div className="contact-form">
            <form action="" ref={formref} onSubmit={sendemail} >
                <input type="text" placeholder='Enter Your Name' required  name='from_name'/>
                <input type="email" placeholder='Enter Your Email' required  name='from_email'/>
                <input type="text" placeholder='Enter Your Subject' required name='New message' />
                <textarea name="message" id="" cols="40" rows="10" placeholder='Enter Your Message' required></textarea>
                <Button type="submit" butonicindekiyazi="Send" classadi="buttoncontact" />
            </form>
        </div>
    </div>
    </>
    
  )
}

export default Contact
