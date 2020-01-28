import React, { Component } from 'react';
import Footer from '../cmps/footer/Footer.jsx';


export default class HomePage extends Component {

    render() {
        return (
            <div>
                <div className="home-page-header parallax">
                    <div className="info flex column">
                        <h1 className="home-page-title">Taskit lets you simplify your work collaboratively and get more of it done.</h1>
                        <div className="text-box">
                            <a href="#" className="btn btn-white btn-animate">Get Started</a>
                        </div>
                    </div>
                </div>

                <div className="home-section-info">
                <h1 className="home-section-title">Work with any team</h1>
                    <h2 className="home-section-desc">Whether it’s for work, a side project or even the next family vacation, Taskit helps your team stay organized.</h2>
                </div>

                <div className="home-page-section home-page-section-1"></div>

                <div className="home-section-info">
                    <h1 className="home-section-title">Work together, and acheive more.</h1>
                    <h2 className="home-section-desc">Use Taskit the way your team works best. We’ve got the flexibility & features to fit any team’s style.</h2>
                </div>

                <div className="home-page-section home-page-section-2"></div>

                <Footer />
            </div>
        )
    }
}

