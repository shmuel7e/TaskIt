import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (<React.Fragment>
            <div className="footer">
                <div className='main-logo-footer'><NavLink activeClassName="active" to='/' exact><img src={require('../../assets/images/logo.png')} alt="logo" /></NavLink></div>
                <div className="copy-rights">   © Copyright 2020. All rights reserved. </div>
            </div>
        </React.Fragment>
        )
    }
}
