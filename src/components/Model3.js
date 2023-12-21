import React from 'react'
import Model3Main from '../assets/Model-3-Main-Hero-Desktop-LHD-Animation.webm';
import image from '../assets/Model-3-Interior-Carousel-Slide-1-Desktop-LHD.jpeg'
import image2 from '../assets/Model-3-Interior-Carousel-Slide-2-Desktop-LHD.jpeg'
import image3 from '../assets/Model-3-Interior-Carousel-Slide-3-Desktop-LHD.jpeg'
import image4 from '../assets/Model-3-Interior-Carousel-Slide-4-Desktop-Global.jpeg'
import image5 from '../assets/Model-3-Performance-Carousel-Slide-1-Desktop-Global.jpeg'
import image6 from '../assets/Model-3-Performance-Carousel-Slide-2-Desktop-Global.jpeg'
import image7 from '../assets/Model-3-Performance-Carousel-Slide-3-Desktop-Global.jpeg'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-reveal';


const Model3 = () => {
  return (
    <div>
      <div className='home-section'>
        <div>
          <video className='video' src={Model3Main} autoPlay muted loop>
          </video>
        </div>
        <div className='home-items car-model-3 d-flex'>
          <Fade bottom>
          <div className='mt-5 text-light'>
            <h1>Model 3</h1>
            <h4>Lease starting at $329/mo*</h4>         
          </div>
          <div>
            <div className='car-model-video-bottom-model-3 d-flex text-light'>
              <div>
                <h3>76cu ft</h3>
                <p>Cargo Space</p>
              </div>
              <div>
                <h3>330mi</h3>
                <p>Range (EPA est.)</p>
              </div>
              <div>
                <h3>AWD</h3>
                <p>Dual Motor</p>
              </div>
            </div>
            <div className='home-btn-model-3 mb-5'>
              <Link to='/Shop'><button className=''>Explore Inventory</button></Link>
              
              <button className='mx-3'>Custom Order</button>
            </div>
          </div> 
          </Fade>    
        </div> 
      </div>
      <div className=''>
      <Zoom >
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active section-2-model-3-header-image">
              <img src={image} alt="" />
              <div className="carousel-caption d-md-block me-5">
                
                <h4>15-Inch Touchscreen</h4>
                <p>A minimal interior aesthetic—with all controls accessible on the central 15-inch touchscreen and the steering wheel.</p>
                
              </div>
            </div>
            <div className="carousel-item section-2-model-3-header-image">
              <img src={image2} alt="" />
              <div class="carousel-caption d-md-block me-5">
              <h4>Spacious Cabin</h4>
                <p>The forward-designed instrument panel provides even more legroom in the front, for a spacious passenger cabin.</p>
              </div>
            </div>
            <div className="carousel-item section-2-model-3-header-image">
              <img src={image3} alt="" />
              <div class="carousel-caption d-md-block me-5">
                <h4>Storage and Charging</h4>
                <p>The premium center console is modern and efficient, with plenty of covered storage and charging for two smartphones.</p>
              </div>
            </div> 
            <div className="carousel-item section-2-model-3-header-image">
              <img src={image4} alt="" />
              <div class="carousel-caption d-md-block me-5">
                <h4>Max Legroom</h4>
                <p>The back seat is very comfortable—with maximum legroom and beautiful views through the all-glass roof.</p>
              </div>
            </div>           
          </div>
        </div>
        </Zoom>
      </div>
      <div className='model-3-section-3-header'>
        <div className='model-3-section-3'>
          <img src={image} />
          <div className='model-3-section-3-text d-flex'>
            <Fade bottom>
            <div className='me-5 ms-5'>
              <h3>3.1s</h3>
              <p>0-60 mph†</p>
            </div>         
            <div className='ms-5 me-5'>
              <h3>162mph</h3>
              <p>Top Speed</p>
            </div>
            <div className='ms-5 me-5'>
              <h3>AWD</h3>
              <p>Dual Motor</p>
            </div>
            </Fade>
          </div>
        </div>
        <div className='model-3-section-4 mb-5'>
        <Fade bottom>
          <div>
            <div>
              <h2>Quick Acceleration</h2>
            </div>
            <div className='model-3-section-4-btn mt-4'> 
              <button className=''>Demo Drive</button>
            </div>
          </div> 
          <div className='model-3-section-4-text'>
            <p>Accelerate from 0-60 mph† in as little as 3.1 seconds with an optional Performance upgrade—featuring Dual Motor AWD, upgraded brakes and more. Chat with a Tesla Advisor to learn more about Model 3.</p>
          </div> 
        </Fade>
        </div>       
      </div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">         
          <div className="carousel-item active">
            <img className='video' src={image5}/>
            <div class="carousel-caption d-md-block">
              <Fade bottom>
              <h4>Cinematic Experience</h4>
              <p>Includes Pirelli P Zero tires and more powerful brakes for enhanced handling and performance.</p>
              </Fade>
            </div>
          </div>
          <div className="carousel-item">
            <img className='video' src={image6}/>
            <div class="carousel-caption d-md-block">
            <Fade bottom>
              <h4>Carbon Fiber Spoiler</h4>
              <p>Enhanced aerodynamics and improved stability at speeds up to 162 mph.</p>
              </Fade>
            </div>
          </div>
          <div className="carousel-item">
            <img className='video' src={image7}/>
            <div class="carousel-caption d-md-block">
            <Fade bottom>
              <h4>Performance Pedals</h4>
              <p>Enhanced aerodynamics and improved stability at speeds up to 162 mph.</p>
              </Fade>
            </div>
          </div>        
        </div>
      </div>
    </div>
  )
}

export default Model3
