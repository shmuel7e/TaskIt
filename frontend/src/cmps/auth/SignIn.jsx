import React, { Component } from 'react'

export default class SignIn extends Component {
    render() {
        return (
            <div className="form sign-in">
                    <h2>Welcome back,</h2>
                    <label className='form-label'>
                        <span className='form-span'>Email</span>
                        <input type="email" className='form-input'/>
                    </label>
                    <label className='form-label'>
                        <span className='form-span'>Password</span>
                        <input type="password" className='form-input'/>
                    </label>
                    <p className="forgot-pass">Forgot password?</p>
                    <button type="button" className="submit form-button">Sign In</button>
                    <button type="button" className="fb-btn form-button">Connect with <span className='form-span'>facebook</span></button>
                </div>
        )
    }
}
