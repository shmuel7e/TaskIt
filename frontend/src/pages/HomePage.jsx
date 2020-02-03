import React, { Component } from 'react';
import Footer from '../cmps/footer/Footer.jsx';



class HomePage extends Component {

    getStart = () => {
        this.props.history.push('auth')
    }

    render() {
        return (
            <div className="homepage-container">

                <div className="home-page-header-hero flex column">
                    <div className="homepage-hero">TaskIt, Let's make your work simple.</div>
                    <button className="homepage-btn" onClick={this.getStart}>Get Started</button>
                </div>

                <section className="dnd-section flex">
                    <div className="dnd-seciton-img"></div>
                    <div className="dnd-section-desc flex column">
                        <h2>We Support Drag & Drop</h2>
                        <div>Control your tasks in a free and comfortable way with the latest drag and drop technology.</div>
                    </div>
                </section>

                <section className="socket-section flex">
                    <div className="socket-section-desc flex column">
                        <h2>We Support Web Sockets</h2>
                        <div>Update Add & Edit Tasks in real time. using the new Web Socket technology. Web sockets enables you freedom on your project while staying tuned with your team.
                        </div>
                    </div>
                    <div className="socket-seciton-img"></div>
                </section>

                <section className="dnd-section flex">
                    <div className="dnd2-seciton-img"></div>
                    <div className="dnd-section-desc flex column">
                        <h2>Manage Your Boards</h2>
                        <div>Create and edit your boards, TaskIt allows you to organize your work in a fun and intuitive way. </div>
                    </div>
                </section>


                <Footer />
            </div>

        )
    }
}

export default HomePage


