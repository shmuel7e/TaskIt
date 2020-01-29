import React, { Component } from 'react'

export default class ModalHeader extends Component {

    onTxtChange = (editedTxt) => {
        this.props.changeTaskTitle(this.props.topic, this.props.task, editedTxt)
    }

    onCloseModal = () => {
        this.props.closeModal();
    }

    render() {
        const { task } = this.props;
        const { topic } = this.props
        return (
            <div className="modal-header">
                <div className="close-btn-container icon-cross" onClick={this.onCloseModal}></div>
                <span className="icon-window"></span>
                <div className="modal-txt title" style={{ background: task.bgColor }} suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent)}>{task.title}</div>
                <div className="small-title">
                    <small>In list <span className="bottom-line">{topic.title}</span></small>
                </div>
            </div>
        )
    }
}
