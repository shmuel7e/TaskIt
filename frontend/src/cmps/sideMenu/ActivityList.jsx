import React, { Component } from 'react'
import ActivityPreview from './ActivityPreview'

export default class ActivityList extends Component {
    render() {
        return (
            <div className="activity-list flex column"> {this.props.board.activities.map((activity, idx) => {
                return <ActivityPreview activity={activity} key={idx} />
            })}
            </div>
        )
    }
}
