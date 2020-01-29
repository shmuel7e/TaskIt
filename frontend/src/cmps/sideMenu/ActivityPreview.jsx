import React, { Component } from 'react'
import moment from 'moment';

export default class ActivityPreview extends Component {
    render() {
        const {activity} = this.props;
        return (
            <div className="user-info">
                <span className='user-name'>{activity.activityName}</span>
                <span className='user-time'>{moment(activity.createdAt).fromNow()}</span>
            </div>
        )
    }
}
