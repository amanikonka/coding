import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const testingFunction = () => {


        let value = '/about'

        if (username == 'Admin' && password == '123') {
            //some code to navigate us to about page
            navigate(value)

        } else {
            alert("Invalid")
        }
        // alert(username)
        // alert('username:' + username + '\npassword:' + password)
    }

    return (
        <div className='login-container'>
            <div className='login-form'>
                <div>
                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className='username'
                        placeholder='Username' />
                </div>
                <div>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='password'
                        placeholder='Password' />
                </div>
                <div>
                    <button onClick={testingFunction} className='login-button'>Log In</button>
                </div>
            </div>
        </div>
    )
}
