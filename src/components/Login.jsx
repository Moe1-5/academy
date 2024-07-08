 import React from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
         navigate('/class')
    }
    
    
  return ( 
    <div className = 'login-container'>
        <form  className = 'login-card' onSubmit = {handleSubmit}>
            <h1>Log In</h1>
            <div>
                <label className = 'username-label label'>username</label>
                <input type="text" className = 'username-input input'/>
            </div>
            <div>
                <label className = 'email-label label'>Email</label>
                <input type="mail" className = 'mail-input input'/>
            </div>
            <div>
                <label className = 'password-label label'>password</label>
                <input type="text" className = 'password-input input'/>
            </div>
            <button type = 'submit'>Log In</button>
        </form>
    </div>
  )
}

export default Login