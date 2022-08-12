import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Optin() {
  const [values, setValues] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values);
    navigate('/')
  }

  return (
    <div>
     <input type="text" name="fname" placeholder='First name' onChange={handleChange} />
      <input type="text" name="lname" placeholder='Last name' onChange={handleChange} />
      <input type="email" name="email" placeholder='Email' onChange={handleChange} />
      <input type='submit' value='Download' onClick={handleSubmit} />
    </div>
  )
}
