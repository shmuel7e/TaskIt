import React, { Component } from 'react'

export default class TemplatePreview extends Component {

    render() {
        return (
            <div className="single-template">
                <img src={require(`../../assets/images/templates/${this.props.template}`)} alt={this.props.template}></img>
            </div>
        )
    }
}


