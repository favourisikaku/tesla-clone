import ModelX from '../assets/model_X.jpg'
import Model3 from '../assets/model_3.jpg'
import ModelY from '../assets/model_Y.jpg'
import { Zoom } from 'react-reveal';
import toast from 'react-hot-toast';

const products = [
  { id: 1,
    image: Model3,
    name: 'Model 3',
    price: 55000
},
{ id: 2,
  image: ModelX ,
  name: 'Model X',
  price: 79990
},
{ id: 3,
  image: ModelY,
  name: 'Model Y',
  price: 47490
}
]

const Shop = ({cart, setCart}) => {
  

  // const [cart, setCart] = useState([])
  
  const addToCart = (product) => { 
   if(!cart.includes(product)){
    setCart([...cart, product])
    console.log(product);
  } else{
    toast.error('Item is already in the cart')
  }
  }
  
  return (
    <div className='product-header d-flex'>
      {products.map((product) => (  
        <div key={product.id} className='product'>
          <Zoom>
          <div className='product-card'>
            <img className='mt-3' src={product.image} alt="name" />
            <h2 className='mt-3'>{product.name}</h2>
            <h4>{product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD', maximumSignificantDigits: 5})}</h4>
            <button onClick ={(() => addToCart(product))} className='mb-3'>Add to cart</button>    
          </div> 
          </Zoom>        
        </div>
      ))}
      
    </div>  
  )
}

export default Shop
