import React from 'react'
import ModelXMain from '../assets/ModelXMain.webm';
import image1 from '../assets/modelximage1.jpg';
import image2 from '../assets/connected.jpg';
import image3 from '../assets/audio.jpg'
import video1 from '../assets/modelxvideo1.webm'
import video2 from '../assets/modelxvideo2.webm'
import video3 from '../assets/modelxvideo3.webm'
import video4 from '../assets/modelxvideo4.webm'
import video5 from '../assets/modelxvideo5.webm'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal'
import Zoom from 'react-reveal/Zoom'


const ModelX = () => {
  return (
    <div>
      <div className='home-section'>
        <div>
          <video className='video' src={ModelXMain} autoPlay muted loop>
          </video>
        </div>
        <div className='home-items car-model d-flex'>
          <div className='mt-5 text-light'>
            <Fade bottom>
            <h1>Model X</h1>
            <h4>From $68,590*</h4>   
            <p>After Federal Tax Credit & Est. Gas Savings</p>  
            </Fade>     
          </div>
          <div className='car-model-video-bottom d-flex text-light mb-5'>
            <Fade bottom>
            <div>
              <h3>333 mi</h3>
              <p>Range (EPA est.)</p>
            </div>
            <div>
              <h3>2.5s</h3>
              <p>0-60 mph*</p>
            </div>
            <div>
              <h3>9.9s</h3>
              <p>1/4 Mile</p>
            </div>
            <div>
              <h3>1,020 hp</h3>
              <p>Peak Power</p>
            </div>
            <div className='home-btn mb-5'>
              <Link to='/Shop'><button className=''>Order Now</button></Link>                 
          </div>
          </Fade>
          </div>
        </div>  
      </div>
      <div>
        <Fade bottom>
        <h1 className='text-center p-5'>Interior of the Future</h1>
        </Fade>
      </div>
      <div className='car-model-images'>
        <Zoom>
        <img src={image1} alt="" />
        </Zoom>
      </div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video className='video' src={video1} autoPlay muted loop></video>
            <div class="carousel-caption d-md-block">
              <Fade bottom>
              <h4>Cinematic Experience</h4>
              <p>A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.</p>
              </Fade>
            </div>
          </div>
          <div className="carousel-item">
            <video className='video' src={video2} autoPlay muted loop></video>
            <div class="carousel-caption d-md-block">
              <Fade bottom>
              <h4>Yoke Steering</h4>
              <p>A bold new approach to steering offers better feel and an unobstructed view of the <br /> road ahead. Tap the brake and Model X automatically selects the correct direction to start your trip.</p>
              </Fade>
            </div>
          </div>
          <div className="carousel-item">
            <video className='video' src={video3} autoPlay muted loop></video>
            <div class="carousel-caption d-md-block">
              <Fade bottom>
              <h4>Perfect Environmentl</h4>
              <p>
                Experience clean and powerful cabin conditioning from hidden vents. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard.</p>
                </Fade>
            </div>
          </div>
          <div className="carousel-item">
            <video className='video' src={video4} autoPlay muted loop></video>
            <div class="carousel-caption d-md-block">
              <Fade bottom>
              <h4>Spacious Cabin</h4>
              <p>Model X offers a spacious cabin with the world's largest panoramic windshield and seating for up to seven.</p>
              </Fade>
            </div>
          </div>
          <div className="carousel-item">
            <video  className='video' src={video5} autoPlay muted loop></video>
            <div class="carousel-caption d-md-block">
              <Fade bottom>
              <h4>Console-Grade Gaming.</h4>
              <p>Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles.</p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className='section-3 mb-5'>
        <div className='model-x-section-3-header d-flex'>
        <Fade top>
          <div>
            <img className=''src={image2} alt="" />
          </div>         
          <div className='section-3-text'>          
            <h4>Stay Connected</h4>
            <p>Instantly connect with multi-device Bluetooth, or fast <br />charge devices with wireless and 36-watt USB-C charging.</p>            
          </div>
        </Fade>
        </div>
        <div className='model-x-section-3-header-2 d-flex'>
          <Fade bottom>
          <div className='section-3-text'>         
            <h4>Sublime Sound</h4>
            <p>A 22-speaker, 960-watt audio system with Active Road <br /> Noise Reduction offers the best listening experience wherever you are.</p>           
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
          </Fade>
        </div>
      </div>  
    </div>
  )
}

export default ModelX
