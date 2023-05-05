import React from 'react'
import not from '../img/yal.png'
import './NotFound.css'
import {TiArrowBackOutline} from 'react-icons/ti'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not404">
      <div className="btn404">
     <Link to="/"> <TiArrowBackOutline  className='not404btn'/> </Link>
     <Link to="/"> <h1>Back Home</h1></Link>
      </div>
      <img src={not} alt="" />
    </div>
  )
}

export default NotFound