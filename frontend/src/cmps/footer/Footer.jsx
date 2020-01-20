import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (<React.Fragment>
            <div className="footer-section">
                <h2 className="contact-us">Contact Us</h2>
                <h2 className="contact-us-desc">Go from idea to action in seconds with Taskit’s intuitively simple boards, lists, and cards.</h2>
                <NavLink activeClassName="active" to='/About'> <button className="btn-about">ABOUT US</button> </NavLink>
            </div>
            <div className="footer">
                <div className='main-logo-footer'><NavLink activeClassName="active" to='/' exact><img src={require('../../assets/images/logo.png')} alt="logo" /></NavLink></div>
                <div className="copy-rights">   © Copyright 2020. All rights reserved. </div>
            </div>
        </React.Fragment>
        )
    }
}
