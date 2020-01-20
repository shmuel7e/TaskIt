import React, { Component } from 'react';
import TemplatePreview from './TemplatePreview';

export default class TemplateList extends Component {


    DynamicCmp = () => {

        switch (this.props.type) {
            case 'top':
                return <div className="templates-container">
                    <h2 className="home-template-title">New and Notable Templates</h2>
                    {this.props.templates.map((template, idx) => {
                        return <TemplatePreview template={template} key={idx} />
                    })}
                </div>

            default:
                return;
        }
    }





    render() {
        if (!this.props.templates) return 'loading..';

        return <div className="templates-container">
            {this.DynamicCmp()}
        </div>
    }









/* 
            <h2 className="home-template-title">New and Notable Templates</h2>
            <img src={require(`../../assets/images/templates/tmp1.PNG`)} alt=""></img>
            <img src={require(`../../assets/images/templates/tmp1.PNG`)} alt=""></img>
            <img src={require(`../../assets/images/templates/tmp1.PNG`)} alt=""></img>

            <h2 className="home-template-title">Business</h2>
            <img src={require(`../../assets/images/templates/tmp1.PNG`)} alt=""></img>
            <img src={require(`../../assets/images/templates/tmp1.PNG`)} alt=""></img>
            <img src={require(`../../assets/images/templates/tmp1.PNG`)} alt=""></img>

            <h2 className="home-template-title">Design</h2>
            <img src={require(`../../assets/images/templates/tmp1.PNG`)} alt=""></img>
            <img src={require(`../../assets/images/templates/tmp1.PNG`)} alt=""></img>
            <img src={require(`../../assets/images/templates/tmp1.PNG`)} alt=""></img>

            <h2 className="home-template-title">Personal</h2>
            <img src={require(`../../assets/images/templates/tmp1.PNG`)} alt=""></img>
            <img src={require(`../../assets/images/templates/tmp1.PNG`)} alt=""></img>
            <img src={require(`../../assets/images/templates/tmp1.PNG`)} alt=""></img> */}