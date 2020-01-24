import React, { Component } from 'react'
import moment from 'moment';

export default class ModalCommentPreview extends Component {
    render() {
        const {comment} = this.props

        return (
            <React.Fragment>
                <div className="side-modal-member" style={{ cursor: 'context-menu ', background: 'transparent' }}>
                    <span className="member-name-initials" >
                        {this.props.getInitials(comment.user.username)}
                    </span>
                    <div className="user-info">
                        <span className="user-name">{comment.user.username}</span>
                        <span className="user-time">{moment(comment.date).fromNow()}</span>
                    </div>
                </div>
                <div className="user-comment">{comment.txt}</div>
            </React.Fragment>
        )
    }
}
