import React from 'react'


// login funtion running my login form returning html
export default function LoginForm() {

    return (
        <div className="App App-header App-link">
            <h3 className='border'>Log in</h3>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" placeholder="Username" />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" id="password" placeholder="Password" />
        </div>
    )


}