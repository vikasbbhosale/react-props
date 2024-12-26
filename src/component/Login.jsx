import React, { useState } from 'react'
import './form.css'


function Login() {
    const [Username, setUsername] = useState('username');
    const [Email, setEmail] = useState('email');
    const [Password, setPassword] = useState('password');
  return (
    <>
        <form class="form">
          <div class="user">
            <lable> Username: </lable><br/>
            <input class="input" type="text"  placeholder=" Username" onChange={ (e) => setUsername(e.target.value)}/><br/><br/>
            <label > Email: </label><br/>
            <input   class="input" type="email" id="first" name="first" placeholder="email" onChange={(e) => setEmail(e.target.value)} /><br/><br/>
            <label >Password:</label><br/>
            <input  class="input"  type="password" id="password" name="password" placeholder="Password"  onChange={ (e) => setPassword(e.target.value)}/><br/><br/>

            <div >
                <button class="button" type="submit">Submit</button>
            </div>
            </div>
        </form>
    
    </>
  )
}

export default Login;