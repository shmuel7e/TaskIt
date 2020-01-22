import React, { Component } from 'react';
import TemplateList from '../cmps/template/TemplateList.jsx';
import TemplateService from '../services/TemplateService.js';
import Footer from '../cmps/footer/Footer.jsx';


export default class HomePage extends Component {

    state = {
        templates: [],
    }

    componentDidMount() {
        this.getGalleryTemplates();
    }

    getGalleryTemplates = async () => {
        const templates = await TemplateService.getGalleryTemplates();
        await this.setState({ templates });
    }

    render() {
        return (
            <div>

                <div className="home-page-header parallax">
                    <div className="info">
                        <h1 className="home-page-title">Taskit lets you simplify your work collaboratively and get more of it done.</h1>
                        <h2 className="home-page-desc">Taskit’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</h2>
                    </div>
                </div>
                <div className="home-page-templates">
                    <TemplateList type={'top'} templates={this.state.templates} />
                </div>
                <div className="home-page-section">
                    <h1 className="home-section-title">Work together, and acheive more.</h1>
                    <h2 className="home-section-desc">Use Taskit the way your team works best. We’ve got the flexibility & features to fit any team’s style.</h2>
                </div>


                 <Footer /> 
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//       loggedInUser: state.user.loggedInUser,
//       websites: state.website.selectedWebsite
//     };
//   };
//   const mapDispatchToProps = {
//   };

//   export default connect(mapStateToProps, mapDispatchToProps)(HomePage);