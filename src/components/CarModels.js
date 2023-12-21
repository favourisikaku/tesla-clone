import React from 'react'
import HomePageModels from './HomePageModels';
import model_3 from '../assets/model_3.jpg';
import model_X from '../assets/model_X.jpg';
import model_Y from '../assets/model_Y.jpg';


const CarModels = () => {
  return (
    <div>
    <HomePageModels  
    image = {model_3}
    model = "Model 3"
    header = 'Lease starting at $329/mo*'
    desc = ''
    btn1 = "Order Now"
    btn2 = "Demo Drive"/>
    <HomePageModels 
    image = {model_X}
    model = "Model X"
    header = 'From $68,590*'
    desc = 'After Federal Tax Credit & Est. Gas Savings'
    btn1 = "Order Now"
    btn2 = "Demo Drive"/>
    <HomePageModels 
    image = {model_Y}
    model = "Model Y"
    header = 'From $71,090*'
    desc = 'After Est. Gas Savings'
    btn1 = "Order Now"
    btn2 = "Demo Drive"/>
    </div>
  )
}

export default CarModels
