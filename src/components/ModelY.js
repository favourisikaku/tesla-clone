import React from 'react'
import ModelYmain from '../assets/ModelYmain.webm';
import video from '../assets/Range_Mobile-mp4.webm'
import image from '../assets/Model-Y-Utility-Hero-Mobile-LHD.jpeg';
import image2 from '../assets/Model-Y-Utility-B-Mobile-LHD-NA.jpeg'
import image3 from '../assets/AWD_hero@2-jpg.avif';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';


const ModelY = () => {
  return (
    <div>
      <div className='home-section'>
        <div>
          <video className='video' src={ModelYmain} autoPlay muted loop>
          </video>
        </div>
        <div className='home-items car-model car-model-y d-flex'>
          <Fade bottom>
          <div className='mt-5 text-light'>
            <h1>Model Y</h1>
            <h4>Lease starting at $399/mo*</h4>         
          </div>
          <div>
            <div className='car-model-video-bottom d-flex text-light'>
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
            <div className='home-btn home-btn-model-y mb-5'>
              <Link to='/Shop'><button className=''>Order Now</button>
              </Link>              
              <button className=''>Demo Drive</button>
            </div>
          </div>
          </Fade>     
        </div>  
      </div>
      <div className=''>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active section-2-header-image">
              <img src={image} alt="" />
              <div className="carousel-caption d-md-block section-2-text">
                <Fade bottom>
                <p>Versatile seating and storage for cargo and passengers</p>
                </Fade>
              </div>
            </div>
            <div className="carousel-item section-2-header-image">
              <img src={image2} alt="" />
              <div class="carousel-caption d-md-block section-2-text">
                <Fade bottom>
                <p>Room for up to seven with optional third row</p>
                </Fade>
              </div>
            </div>          
          </div>
        </div>
      </div>
      <div className='section-3-model-y-section d-flex'>
        <div className='section-3-header'>
          <video className='video-2' src={video} autoPlay muted loop>
          </video>
          <div className='video-2-text'>
          <Fade bottom>
            <div>
              <h3>330mi</h3>
              <p>Go anywhere with up to 330 miles of estimated range on a single charge</p>
            </div>         
            <div className='px-5 '>
              <h3>15min</h3>
              <p>Recharge up to 162 miles in 15 minutes at Supercharger locations</p>
            </div>
            <div >
              <h3>50,000+</h3>
              <p>Superchargers placed along well-traveled routes around the world</p>
            </div>
            </Fade>
          </div>
        </div>
        <div className='model-y-section-3 ms-5'>
          <Fade bottom>
            <div className='pt-5'>        
              <h6>Range</h6>
              <h2>Go Anywhere</h2>
              <p className='pt-4'>Model Y is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 50,000 Superchargers worldwide, with six new locations opening every week. Chat with a Tesla Advisor to learn more about Model Y or schedule a demo drive today.</p>
            </div>
            <div className='model-y-btn'>
            <Link to='/Shop'>
              <button className='mb-4'>Order Now</button>
            </Link>            
              <button className=''>View Inventory</button>
            </div>
          </Fade>
        </div>    
      </div>
      <div className='model-y-section-4-header'>
        <div>
          <img src={image3} alt="" />  
        </div>
        <div className='model-y-section-4 mt-5 mb-5'>
        <Fade bottom>
          <div>       
            <div>
              <h5>All-Wheel Drive</h5>
              <h1>Dual Motor</h1>
            </div>
            <div className='model-y-section-4-btn'>
            <Link to='/Shop'>
              <button className=''>Order Now</button>
            </Link>            
              <button className=''>View Inventory</button>
            </div>
          </div> 
          <div className='model-y-section-4-text'>
            <p>Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road. Compare Models</p>
          </div>
          </Fade> 
        </div>       
      </div>
    </div>
  )
}

export default ModelY
