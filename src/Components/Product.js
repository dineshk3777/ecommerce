import React from 'react'
import { Products } from '../data'
import {useSelector, useDispatch} from 'react-redux'
import {addToCart, selectCartItems} from '../redux/cartSlice/cartSlice'

const Product = () =>
  {

    const disptach = useDispatch()
    const cartItem = useSelector(selectCartItems)
    console.log("Cart Items = ", cartItem)

    const handleAddToCart = (item)=>{
      disptach(addToCart(item))
    }

    return(
      <div>
        <div className='container'>
          <div className='row'>
            {
              Products.map(function(item)
            {
              return <div key={item.id} className="container col-md-4 my-5">
              <div className="card bg-dark" style={{width: "18rem"}}>
                <div className='p-3 d-flex justify-content-center align-items-center'>
              <img src={item.imgSrc} className="card-img-top" alt="..." style={{width:'200px', height:'200px', borderRadius:'10px'}}/>
              </div>
              <div className="card-body text-light text-center">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <button className="btn btn-primary mx-3"> {item.price.toLocaleString()} {"₹"}</button>
              <button className='btn btn-warning' onClick={()=>handleAddToCart(item)}> Add to Cart </button>
              
  </div>
</div>
            </div>
            })
            }
          </div>
        </div>
      </div>
    )
  }

  export default Product