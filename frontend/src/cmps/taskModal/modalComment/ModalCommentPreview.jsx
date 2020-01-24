import React, { Component } from 'react'

export default class ModalCommentPreview extends Component {
    render() {
        const comment = this.props.comment
      const  date = comment.date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true,month:"short",day:"2-digit" })
        return (
            <React.Fragment>
                <div className="side-modal-member" style= {{cursor:'context-menu ',background:'transparent'}}>
                    <span className="member-name-initials" >
                        {this.props.getInitials(comment.user.username)}
                    </span>
                    <span className="user-info">{comment.user.username} {date} </span>
                </div>
                {comment.txt}
            </React.Fragment>
        )
    }
}
