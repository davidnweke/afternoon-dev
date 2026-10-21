"use client"
import React, {useState} from 'react'

function Page() {

// State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    city: ''
  })

// Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

// Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    console.log("You form has been submitted successfully")
  };

//   console.log(formData.name)
//   console.log(formData.email)
//   console.log(formData.age)
//   console.log(formData.city)

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
          Full Name:
        </label>
        <input 
            type="text" 
            name="name" 
            placeholder="What's your name?"
            required
            value={formData.name}
            onChange={handleChange}
        /> 
            <br />
        <label>
          Email:
        </label>
        <input 
            type="email" 
            name="email" 
            placeholder='Enter your email' 
            required
            value={formData.email}
            onChange={handleChange} 
        /> 
            <br />
        <label>
          Age:
        </label>
        <input 
            type="number" 
            name="age" 
            placeholder='How old are you?' 
            required
            value={formData.age}
            onChange={handleChange}
        /> 
            <br />  
        <label>
          City:
        </label>
        <input 
            type="text" 
            name="city" 
            placeholder='Where do you live?' 
            required
            value={formData.city}
            onChange={handleChange}
        /> 
        <br />
        <button type="submit">Submit</button>
      </form>

      
      
    </div>
  )
}

export default Page