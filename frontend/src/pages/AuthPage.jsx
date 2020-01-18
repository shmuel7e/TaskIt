import React, { Component } from 'react'
import SignIn from '../cmps/auth/SignIn'
import SignUp from '../cmps/auth/SignUp'
export default class AuthPage extends Component {
    state = { signupMode: false }
    toggleMode = () => {
        let signupMode = this.state.signupMode
        this.setState({ signupMode: !signupMode })
    }
    render() {
        return (
            
                <div className={this.state.signupMode ? 'cont s--signup' : 'cont'}>
                    <SignIn />
                    <div className="sub-cont">
                        <div className="img">
                            <div className="img__text m--up">
                                <h2>New here?</h2>
                                <p>Sign up and discover great amount of new opportunities!</p>
                            </div>
                            <div className="img__text m--in">
                                <h2>One of us?</h2>
                                <p>If you already has an account, just sign in. We've missed you!</p>
                            </div>
                            <div onClick={this.toggleMode} className="img__btn">
                                <span className="m--up form-span">Sign Up</span>
                                <span className="m--in form-span">Sign In</span>
                            </div>
                        </div>
                        <SignUp />
                    </div>
                </div>
            

        )
    }
}
