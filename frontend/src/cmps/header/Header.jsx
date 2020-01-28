import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../header/NavBar.jsx';

export default class Header extends Component {

    state = { isHeaderTrans: true }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({ isHeaderTrans: window.scrollY < 1 });

    }

    onToggleMenu = () => {
        document.querySelector('.main-navbar').classList.toggle('open');
        document.querySelector('.main-nav').classList.toggle('menu-open');
    }

    render() {
        const { state } = this
        return (
            <header className={state.isHeaderTrans ? '' : 'colorful'}>
                <div className="main-nav">
                    <div className='main-logo'><NavLink activeClassName="active" to='/' exact><img src={require('../../assets/images/logo.png')} alt="logo" /></NavLink></div>
                    <button className="nav-hamburger" onClick={this.onToggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className='main-navbar flex justify-between align-center'>
                        <NavBar
                            onLogout={this.props.onLogout}
                            user={this.props.user} />
                    </div>
                </div>
            </header>
        )
    }
}
