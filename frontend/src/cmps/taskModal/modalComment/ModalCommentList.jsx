import React, { Component } from 'react'
import ModalCommentPreview from './ModalCommentPreview.jsx'
export default class ModalCommentList extends Component {
    render() {
        return (
            <ul className="modal-comment-container flex column">
                {this.props.task.comments.map((comment) => {
                    const id = comment.date;
                    return <li key={id}>
                        <ModalCommentPreview comment={comment} getInitials={this.props.getInitials} />
                    </li>
                })}
            </ul>
        )
    }
}
