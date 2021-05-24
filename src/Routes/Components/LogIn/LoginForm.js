import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Login.css';

const LoginForm = () => {
    return (
        <div className="login-wrapper">
            <form className="login-form">
            <div className="login-tittle">Sign In</div>
            <fieldset className="login-field">
                <label  className="login-label">
                    <input className="login-input" name="name" placeholder="Email or username"></input>
                </label>
             </fieldset>
            <fieldset className="login-field">
                <label className="login-label">
                    <input className="login-input" name="password" placeholder="Password"></input>
                </label>
            </fieldset>
            <button className="login-btn" type="submit">Log in</button>
            <div className="login-div">
                <span>No account?   </span>
                <Link to="/">Create One!</Link>
            </div>
<<<<<<< HEAD
=======
            <button className="login-btn" type="submit">Log in</button>
>>>>>>> 26ed66fb3fd16456898b9176d580895bf56dfc1b
            </form>
        </div>
     );
}
 
export default LoginForm;