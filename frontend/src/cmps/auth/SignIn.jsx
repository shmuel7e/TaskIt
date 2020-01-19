import React, { Component } from 'react'

export default class SignIn extends Component {
    state = { credentials: { email: '', password: '' } }

    inputChange =(ev) => {
        let value = ev.target.value
        let fieldName = ev.target.name
        const credentials = this.state.credentials
        credentials[fieldName] = value
        this.setState({ credentials })
    }
    checkCredentials=()=>{
        console.log(this.state.credentials)
    }
    render() {
        return (
            <div className="form sign-in">
                    <h2>Welcome back,</h2>
                    <label className='form-label'>
                        <span className='form-span'>Email</span>
                        <input onChange={this.inputChange} name="email" type="email" className='form-input'/>
                    </label>
                    <label className='form-label'>
                        <span className='form-span'>Password</span>
                        <input onChange={this.inputChange} name="password"  type="password" className='form-input'/>
                    </label>
                    <p className="forgot-pass">Forgot password?</p>
                    <button onClick={this.checkCredentials} type="button" className="submit form-button">Sign In</button>
                    <button type="button" className="fb-btn form-button">Connect with <span className='form-span'>facebook</span></button>
                </div>
        )
    }
}
