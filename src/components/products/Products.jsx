import React from 'react'
import { ProductList } from './ProductList'
export const Products = () => {
    var pName = "iphone 14"
    var pprice = 1300

    var product ={
        name :"ipad",
        price:1000
    }

    var productArray =[
        {
            id:1,
            name :"iphone 13"
        },
        {
            id:2,
            name:"iphone 12"
        },
        {
            id:3,
            name:"iphone 15"
        }
    ]
  return (
    <div>
        <h1>PRODUCTS COMPONENTS</h1>
        {/* <ul>
            {
                productArray.map((p)=>{
                    return(
                        <li>{p.id}-- {p.name}</li>
                    )
                })
            }
        </ul> */}
        <ProductList name ={pName} price ={pprice} product={product} productArray ={productArray}></ProductList>
    </div>
  )
}
