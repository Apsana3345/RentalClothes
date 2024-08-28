import React from 'react'

const Login = () => {
  return (
    <div>
     
      <label for="username">Username:</label>
      <input type="text" id="username" name="username"/>
      <label for="password">Password:</label>
<input type="password" id="password" name="password"/>
<label for="email">Email:</label>
<input type="email" id="email" name="email"/>
<label for="phoneNumber">PhoneNumber:</label>
<input type="number" id="phoneNumber" name="phoneNumber"/>
<button type="submit">Sign Up</button>



     
    </div>
  )
}

export default Login
