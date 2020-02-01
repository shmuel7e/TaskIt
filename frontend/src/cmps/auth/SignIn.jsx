import React, { Component } from 'react'
import EventBusService from '../../services/EventBusService'
export default class SignIn extends Component {
    state = { credentials: { email: '', password: '' } }

    inputChange = (ev) => {
        let value = ev.target.value
        let fieldName = ev.target.name
        const credentials = this.state.credentials
        credentials[fieldName] = value
        this.setState({ credentials })
    }
    checkCredentials = () => {
        let { email, password } = this.state.credentials
        const isValidEmail = this.validateEmail(email)
        password=password+""
        if (isValidEmail && password.length > 5) {
            this.props.onSignIn(this.state.credentials)
        } else {
            EventBusService.emit('toggleModal', { msg: 'Email not valid or Password less then 5 char', style: 'danger' });
        }
    }
    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    render() {
        return (
            <div className="form sign-in">
                <h2>Welcome back,</h2>
                <label className='form-label'>
                    <span className='form-span'>Email</span>
                    <input
                        onChange={this.inputChange}
                        required
                        name="email"
                        type="email"
                        className='form-input' />
                </label>
                <label className='form-label'>
                    <span className='form-span'>Password</span>
                    <input
                        required
                        onChange={this.inputChange}
                        name="password"
                        type="password"
                        className='form-input' />
                </label>
                <p className="forgot-pass">Forgot password?</p>
                <button onClick={this.checkCredentials} type="button" className="submit form-button">Sign In</button>
            </div>
        )
    }
}
