import React, { useEffect } from 'react'
import './Aboutclick.css'
import aboutimg from "./img/burxanabout.png"
import teacher from "./img/teacher.png"
import gym from "./img/gym.jpg"
import education from "./img/education.JPG";
import { AiOutlineHome } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";
// Aos
import Aos from 'aos'
import 'aos/dist/aos.css'




const Aboutclick = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);


  // use navigator

  const navigate = useNavigate();


  return (
    <>
      <div className="Aboutmore">
        <div className="navabout">
          <button className='abouticonbutton' onClick={()=> navigate('/')}>
            <AiOutlineHome className='homeiconabout' id='abouticon' />
          </button>
          <button className='abouticonbutton' onClick={()=> navigate('/contact')}>
          <BiPhoneCall className='calliconabout' id='abouticon' />
          </button>
        </div>
        <div className="Aboutmore-start">
          <h1>About <span>Me</span></h1>
        </div>

        <div className="morecards">

          <div data-aos="fade-up" className="moreme" id='aboutcardsall'>
            <img src={aboutimg} alt="" />
            <h1>In my opinion, writing clean code requires patience and focus.  I think I have it.  Because I love this job.</h1>
          </div>

          <hr />
          
          <div data-aos="fade-up" className="morehobby" id='aboutcardsall'>
            <h1>When I wanted to come to this field, everything seemed very strange to me.  Until you get to know this person. He is  the best teacher in the world  <span> Anvar Khalid.</span>  Thank you for everything! <a href="https://www.anvarkhalid.com/">www.anvarkhalid.com</a></h1>
            <img src={teacher} alt="" />
          </div>
          <hr />

          <div data-aos="fade-up" className="moreteacher" id='aboutcardsall'>
            <img src={gym} alt="" />
            <h1>My biggest hobbies are technology, sports and cars. When I was 17 years old,Football I won a gold medal in the Inter PIK team.  Later, until today, I am constantly busy with the gym.</h1>
          </div>
          <hr />

          <div data-aos="fade-up" className="moreeducation" id='aboutcardsall'>
            <h1>I completed my secondary education between 2002 and 2013. In 2015, I enrolled in the International Relations Faculty of the Ukrainian PUET University and graduated in 2019.</h1>
            <img src={education} alt="" />
          </div>



        </div>
      </div>

    </>

  )
}

export default Aboutclick