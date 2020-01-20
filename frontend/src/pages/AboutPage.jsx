import React, { Component } from 'react'
import Footer from '../cmps/footer/Footer'

export default class AboutPage extends Component {
    render() {
        return (<React.Fragment>

            <div className="about-page-header">
                <div>  SHOOT FOR THE STARS </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, rerum!</p>
            </div>,

            <div className="about-page-container flex">

                <div className="creator-section1"></div>

                <div className="creator-section2">
                    <img src={require('../assets/images/shmuel.JPG')} alt=""></img>
                    <h1>Shmuel Elkis</h1>
                    <p>And who said you're on in a million anyway?</p>
                    <div className="social-media flex justify-center justify-around">
                        <button>sss</button>
                        <button>sss</button>
                        <button>sss</button>
                        <button>sss</button>
                        <button>sss</button>
                    </div>

                </div>

                <div className="creator-section3">
                    <img src={require('../assets/images/tal.jfif')} alt=""></img>
                    <h1>Tal Mashiah</h1>
                    <p>Roses are red, violets are blue, there's an unexpected {'\'\{\''} on line 32. </p>
                    <div className="social-media flex justify-center justify-around">
                        <button>sss</button>
                        <button>sss</button>
                        <button>sss</button>
                        <button>sss</button>
                        <button>sss</button>
                    </div>

                </div>

                <div className="creator-section4"></div>

                <div className="creator-section5">

                </div>

                <div className="creator-section6">
                    <img src={require('../assets/images/gilad.jfif')} alt=""></img>
                    <h1>Gilad Bergmann</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eaque.</p>
                    <div className="social-media flex justify-center justify-around">
                        <button>sss</button>
                        <button>sss</button>
                        <button>sss</button>
                        <button>sss</button>
                        <button>sss</button>
                    </div>
                </div>
            </div>

        </React.Fragment>
        )
    }
}
