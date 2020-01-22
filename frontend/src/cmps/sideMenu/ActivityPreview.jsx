import React, { Component } from 'react'

export default class ActivityPreview extends Component {
    render() {
        return (
            <div>
                {this.props.activity.activityName}
                {'' + this.props.activity.createdAt}
            </div>
        )
    }
}
