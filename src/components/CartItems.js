import React from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const CartItems = ({cart, setCart}) => {

  const purchase = () => {
    setCart([])
    toast.success('Payment Successful!')
  }

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item !== product))
  }

  const totalAmount = () => {
    return cart.reduce((cost, {price}) => cost + price, 0)
  }

  return (
    <div className=''>
      {cart.length === 0 && (
        <div className='cart-section'>
        <div className='cart-header'>
          <h2>CART</h2>
          
        </div>
        <div className='cart-header-text'>
          <h6>YOUR CART IS EMPTY.</h6>
         <Link to='/Shop'><button className='mt-3'>CONTINUE SHOPPING</button></Link> 
        </div>   
      </div>   
      )}
      {cart.length >= 1 && (
      <div className='cart-items-header'>
        <h2>CART</h2>
        {cart.map((item) => {
          return(
            <div key={item.id} className='cart-card m-5'>
              <div>
                <img src={item.image} alt="" />
              </div>
              <div className='cart-card-details d-flex'>
                <h1>{item.name}</h1>
                <h5>{item.price.toLocaleString('en-US', {style: 'currency', currency: 'USD', maximumSignificantDigits: 5})}</h5>
                <i onClick={() => removeFromCart(item)} class="fa-solid fa-trash"></i>
              </div>
            </div>                 
          )})}
          <div className='total-amount d-flex'>
            <h1>Total : {parseInt(totalAmount()).toLocaleString('en-US', {style: 'currency', currency: 'USD', maximumSignificantDigits: 5})}</h1>
           
          </div>
          <div className='btn-pay'>
            <button onClick={purchase}>PAY NOW</button>
          </div>
      </div>
      )}     
    </div>
  )
}

export default CartItems
