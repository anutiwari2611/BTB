import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'

const Form = ({onClose}) => {
    const navigate=useNavigate()
    const [Tract,setTract]=useState({
        name:"",
        email:"",
        number:"",
        tractor:"",
        model:"",
        price:"",
        images: []
        

    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setTract((prev)=>({
            ...prev,[name]:value
       }) )
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("successfuly")
        console.log("Submitted",Tract)
        // navigate("/")
    }
  return (
    <div className='modal'>
        <form onSubmit={handleSubmit}>
           <label>Name : </label> <input name="name" placeholder="Enter your name" value={Tract.name}  onChange={handleChange}/>
            <label>Email : </label> <input  type='email' name="email" placeholder="Example@gmail.com" value={Tract.email} onChange={handleChange}/>
              <label>Number : </label><input type='tel' name="number" placeholder="+91-**********" value={Tract.number} onChange={handleChange}/>
               <label>Tractor Brand : </label>
               <select name="tractor" value={Tract.tractor} onChange={handleChange}>
  <option value="">Select Tractor Brand</option>
  <option value="Mahindra">Mahindra</option>
  <option value="Swaraj">Swaraj</option>
  <option value="John Deere">John Deere</option>
  <option value="Sonalika">Sonalika</option>
  <option value="New Holland">New Holland</option>
  <option value="Eicher">Eicher</option>
  <option value="Messy Ferguson">Messy Ferguson</option>
  <option value="Powertac">Powertrack</option>
  <option value="other">Other Tractor Brand</option>
</select>
                <label>Model : </label>
                <select name="model" value={Tract.model} onChange={handleChange}>
  <option value="2015">2015r</option>
  <option value="2016">2016</option>
  <option value="2017">2017</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
  <option value="2025">2025</option>
</select>
                <label>Price : </label> <input  type='Number'name="price" placeholder="Enter Price" value={Tract.price} onChange={handleChange}/>
                <label>Select Images:</label>
<input
  type="file"
  name="images"
  accept="image/*"
  multiple
  onChange={(e) => {
    const files = Array.from(e.target.files);
    setTract((prev) => ({
      ...prev,
      images: files
    }));
  }}
/>
<div>
<button type='submit' >Submit</button>
<button onClick={onClose}>Close</button>
</div>


            
        </form>

    </div>
  )
}

export default Form