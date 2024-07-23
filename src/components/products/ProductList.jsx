import React from 'react'

export const ProductList = (props) => {
    console.log("PRODUCT LIST COMPONENT")
  return (
    <div>
        <h1>PRODUCT LIST COMPONENT</h1>
        <h2> Product name = {props.name}</h2>  
        <h2>Product Price ={props.price} </h2>
        <h3>Name ={props.product.name}</h3>
        <h3>Price = {props.product.price}</h3> 
        <ul>
          {props.productArray.map((product)=>{
            return(
              <li>
                {product.id}--{product.name}
              </li>
            )
          })}
        </ul> 
    </div>
  )
}
