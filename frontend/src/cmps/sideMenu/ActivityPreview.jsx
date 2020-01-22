import React, { Component } from 'react'

export default class ActivityPreview extends Component {
    render() {
        return (
            <div>
                {this.props.activity.activityName}
                {/* {new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} */}
            </div>
        )
    }
}
