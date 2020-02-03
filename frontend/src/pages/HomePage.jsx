import React, { Component } from 'react';
import Footer from '../cmps/footer/Footer.jsx';



class HomePage extends Component {

    getStart=()=>{
        this.props.history.push('auth')
    }

    render() {
        return (
            <div className="homepage-container">
                <div className="hero-light"></div>
                <div className="home-page-header-hero flex align-end justify-center">
                    <h1 className="hero-title">Taskit, lets make your work simple.</h1>
                    <button className="start-btn" onClick={this.getStart}>get started</button>
                </div>
                 <div className="logos-support-container flex justify-around">
                    <img src={require('../assets/images/templates/tmp3.PNG')} alt=""/>
                    <img src={require('../assets/images/templates/tmp2.PNG')}  alt=""/>
                    <img src={require('../assets/images/templates/tmp4.PNG')}  alt=""/>
                </div> 
                <Footer />
            </div>
        )
    }
}

export default HomePage


