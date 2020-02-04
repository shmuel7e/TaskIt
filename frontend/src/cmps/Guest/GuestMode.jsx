import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/UserActions'
import { signup } from '../../actions/UserActions'

class GuestMode extends Component {

    state = {
        credentials: {
            email: 'GUEST@gmail.com',
            password: '00000000'
        }
    }

    componentDidMount() {
        this.guestMode();
    }

    guestMode = async () => {
        await this.props.login(this.state.credentials)
        if (!this.props.user) {
        } else {
            this.props.history.push('/topic/' + '5e39383c6608b41028fd6173');
        }
    }


    render() {
        return (
            <div>

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

export default connect(mapStateToProps, mapDispatchToProps)(GuestMode);
