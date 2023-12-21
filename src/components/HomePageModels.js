import React from 'react'
import Fade from 'react-reveal'
import { Link } from 'react-router-dom';

const HomePageModels = ({image, desc, model, header, btn1, btn2}) => {
  return (
    <div>
      <div className='home-section'>
        <div>
          <img className='image' src={image} alt=''/>
        </div>
        <div className='home-items'>
        <Fade bottom>
          <div className='mt-5 text-dark'>           
            <h1>{model}</h1>
            <h4>{header}</h4>
            <p>{desc}</p>          
          </div>
          <div className='home-btn mb-5'>
            <Link to='./Shop'><button className=''>{btn1}</button></Link>            
            <button className=''>{btn2}</button>
          </div>
          </Fade>
        </div>  
      </div>
    </div>
  )
}

export default HomePageModels
