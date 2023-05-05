import React, { useEffect } from 'react'
import Button from './Button'
import './About.css'
import abouts from './assets/img/brx.jpeg'
import { Link } from 'react-router-dom'



// Aos
import Aos from 'aos'
import 'aos/dist/aos.css'




const About = () => {

  useEffect(() =>{
    Aos.init({duration:1500})
  },[]);
  return (
    <div className="about">
      
        <div  class="mainabout row">
     
          <div data-aos="fade-right" className="about-text col-12 col-md-6">
            <h2 >About <span>Me</span> </h2>
            <h5>Hello, my name is <span> Burxan.</span>I am 27 years old. <br></br> I am from Azerbaijan (Kelbajar) and I live in Baku.</h5>
           
          <Link to="/about"target="_top" className='aboutbutton'>
            <Button butonicindekiyazi='Read More.' classadi='aboutbtn'  />
          </Link>
              

            </div>
         < img data-aos="fade-left" src={abouts} alt="" />
        </div> 
      
    </div>
  )
}

export default About