import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <div className="form sign-up">
                <h2>Time to feel like home,</h2>
                <label className='form-label'>
                    <span className='form-span'>Name</span>
                    <input type="text" className='form-input'/>
                </label>
                <label className='form-label'>
                    <span className='form-span'>Email</span>
                    <input type="email" className='form-input'/>
                </label>
                <label className='form-label'>
                    <span className='form-span'>Password</span>
                    <input type="password" className='form-input'/>
                </label>
                <button type="button" className="submit form-button">Sign Up</button>
                <button type="button" className="fb-btn form-button">Join with <span className='form-span'>facebook</span></button>
            </div>
        )
    }
}
