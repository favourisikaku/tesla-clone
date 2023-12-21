import React from 'react'
import tesla from '../assets/tesla.mp4';
import downArrow from '../assets/down-arrow.svg'
import CarModels from './CarModels';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal'


const HomePage = () => {
  return (
    <div>
      <div className='home-section'>
        <div>
          <video className='video' src={tesla} autoPlay muted loop>
          </video>
        </div>
        <div className='home-hero'>
          <Fade bottom>
          <div className='mt-5 text-light'>
            <h1>Model Y</h1>
            <h4>Lease starting at $399/mo*</h4>
          </div>
          <div className='home-btn home-section-btn'>
           <Link to='./Shop'><button className=''>Order  Now</button></Link> 
            <button className=''>Demo Drive</button>           
          </div>
          <div className='down-arrow'>
          <img src={downArrow} alt=''/>
          </div>
          </Fade>
        </div>  
      </div>
      <CarModels />      
    </div>
  )
}

export default HomePage
