import React, { Component } from 'react'
import EventBusService from '../../services/EventBusService.js'
export default class SignUp extends Component {
    state = { credentials: {username:'', email: '', password: '' } }

    inputChange =(ev) => {
        let value = ev.target.value
        let fieldName = ev.target.name
        const credentials = this.state.credentials
        credentials[fieldName] = value
        this.setState({ credentials })
    }
    checkCredentials = () => {
        let {username, email, password } = this.state.credentials
        const isValidEmail = this.validateEmail(email)
        password=password+""
        if (isValidEmail && password.length > 5 && username) {
           this.props.onSignUp(this.state.credentials)
        } else {
            if(password.length <6) EventBusService.emit('toggleModal',{msg:'Password must be longer then 5 character',style:'danger'});
            if(!username)EventBusService.emit('toggleModal',{msg:'Full name is require',style:'danger'});
            if(!email)EventBusService.emit('toggleModal',{msg:'Email is require',style:'danger'});
        }
    }
    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    render() {
        return (
            <div className="form sign-up">
                <h2>Time to feel like home,</h2>
                <label className='form-label'>
                    <span className='form-span'>Full Name</span>
                    <input 
                    onChange={this.inputChange}
                    required
                    type="text"
                     name="username" 
                     className='form-input'/>
                </label>
                <label className='form-label'>
                    <span className='form-span'>Email</span>
                    <input
                    onChange={this.inputChange}
                     name="email" 
                     type="email"
                      className='form-input'/>
                </label>
                <label className='form-label'>
                    <span className='form-span'>Password</span>
                    <input
                    onChange={this.inputChange}
                     name="password"
                      type="password" 
                      className='form-input'/>
                </label>
                <button
                onClick={this.checkCredentials}
                 type="button"
                  className="submit form-button">Sign Up</button>
            </div>
        )
    }
}
