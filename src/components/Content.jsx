import React from 'react'

export default function Content() {
    var name ="Tithi"
    var age = 23
    var isActive = true
    var user ={
      name: "vedu",
      age: 24,
    }
    return (
    <div style={{backgroundColor:"GrayText"}}>
      {name} 
      <h1>name = {name}</h1>
      <h1>age = {age}</h1>
      <h1>Status ={isActive==true?"Active":"Not Active"}</h1>
      <h2>{user.name}</h2>
    </div>
  )
}
