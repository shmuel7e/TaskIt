import React, { Component } from 'react';

export default class AboutPage extends Component {
    render() {
        return (<React.Fragment>

            <div className="about-page-header">
                <div>  SHOOT FOR THE STARS </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, rerum!</p>
            </div>

            <div className="about-page-container flex">

                <div className="creator-section1"></div>

                <div className="creator-section2 flex">
                    <div>
                        <img src={require('../assets/images/shmuel.JPG')} alt=""></img>
                    </div>
                    <div className="flex column">
                        <h1>Shmuel Elkis</h1>
                        <p>And who said you're on in a million anyway?</p>
                        <div className="social-media flex">
                            <button><a href="https://www.facebook.com/shmuel.elkis.3">FACEBOOK</a></button>
                            <button><a href="https://www.instagram.com/shmuel7_e/">INSTAGRAM</a></button>
                            <button><a href="https://github.com/shmuel7e">GITHUB</a></button>
                            <button><a href="www.linkedin.com/in/shmuel-elkis">Linkedin</a></button>
                        </div>
                    </div>

                </div>

                <div className="creator-section3 flex">
                    <div>
                        <img src={require('../assets/images/tal.jfif')} alt=""></img>
                    </div>
                    <div className="felx column">
                        <h1>Tal Mashiah</h1>
                        <p>Roses are red, violets are blue, there's an unexpected {'\'{\''} on line 32. </p>
                        <div className="social-media flex">
                            <button><a href="https://www.facebook.com/shmuel.elkis.3">FACEBOOK</a></button>
                            <button><a href="https://www.instagram.com/shmuel7_e/">INSTAGRAM</a></button>
                            <button><a href="https://github.com/shmuel7e">GITHUB</a></button>
                            <button><a href="www.linkedin.com/in/shmuel-elkis">Linkedin</a></button>
                        </div>
                    </div>
                </div>

                <div className="creator-section4"></div>

                <div className="creator-section5">

                </div>

                <div className="creator-section6">
                    <div>
                        <img src={require('../assets/images/gilad.jfif')} alt=""></img>
                    </div>
                    <div className="flex column">
                        <h1>Gilad Bergmann</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eaque.</p>
                        <div className="social-media flex">
                            <button><a href="https://www.facebook.com/shmuel.elkis.3">FACEBOOK</a></button>
                            <button><a href="https://www.instagram.com/shmuel7_e/">INSTAGRAM</a></button>
                            <button><a href="https://github.com/shmuel7e">GITHUB</a></button>
                            <button><a href="www.linkedin.com/in/shmuel-elkis">Linkedin</a></button>    
                        </div>
                    </div>
                </div>
            </div>



        </React.Fragment>
        )
    }
}
