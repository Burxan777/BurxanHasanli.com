import React,{useEffect} from 'react'
import './Skills.css'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Skils = ({skilsadi,skilsmetni,sksekli}) => {
  useEffect(() =>{
    Aos.init({duration:1500})
  },[]);
 
  return (
    <>
    {/* */}
    
    <div data-aos="zoom-in-down" className="skills-card col12 col-md-6 col-lg-3"  >
    <img src={sksekli} alt="cardlogo" />
      <h1>{skilsadi}</h1>
    
    
    <p>{skilsmetni}</p>
    </div>
    </>
  )
}

export default Skils