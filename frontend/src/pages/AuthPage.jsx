import React, { Component } from 'react'
import { connect } from 'react-redux';

import { login } from '../actions/UserActions'
import { signup } from '../actions/UserActions'
import SignIn from '../cmps/auth/SignIn'
import SignUp from '../cmps/auth/SignUp'
import BoardService from '../services/BoardService'
import EventBusService from '../services/EventBusService'

class AuthPage extends Component {
    state = { signupMode: false }
    toggleMode = () => {
        let signupMode = this.state.signupMode
        this.setState({ signupMode: !signupMode })
    }
    onSignIn = async (credentials) => {
        await this.props.login(credentials)
        if (!this.props.user) {
            EventBusService.emit('toggleModal', { msg: 'Email or Password are incorrect', style: 'danger' });
        } else {
            EventBusService.emit('toggleModal', { msg: 'Login success', style: 'success' });
            this.props.history.push('/board')
        }
    }
    onSignUp = async (credentials) => {
        await this.props.signup(credentials)
        if (!this.props.user) {
            EventBusService.emit('toggleModal', { msg: 'Signup faild please try again', style: 'danger' });

        } else {
            EventBusService.emit('toggleModal', { msg: 'Signup success', style: 'success' });
            await BoardService.addBoard(this.props.user)
            this.props.history.push('/board')
        }
    }
    render() {
        return (
            <div className="auth-container">
                <div className={this.state.signupMode ? 'cont s--signup' : 'cont'}>
                    <SignIn onSignIn={this.onSignIn} />
                    <div className="sub-cont">
                        <div className="img">
                            <div className="img__text m--up">
                                <h2>New here?</h2>
                                <p>Sign up and discover a new world of project management!</p>
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
                        <SignUp onSignUp={this.onSignUp} />
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.loggedInUser
    };
};
const mapDispatchToProps = {
    login,
    signup
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
