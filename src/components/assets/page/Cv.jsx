import React from 'react'
import cvimg from '../img/resume.jpg'
import"./Cv.css"
import {TiArrowBackOutline} from 'react-icons/ti'
import { Link } from 'react-router-dom'
import Button from '../../Button'

const burxancv = "http://localhost:3000/burxancv.pdf"


const cv = () => {


  return (
    <div className='cvimg'>
      <div className="btncv">
      <Link to="/"><TiArrowBackOutline className='btnCV'/></Link>
     <a href={burxancv} download><Button butonicindekiyazi="Dowloand"classadi="buttoncv" /></a> 
       
      </div>
        <img src={cvimg} alt="" />
    </div>
  )
}

export default cv