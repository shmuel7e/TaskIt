import React, { Component } from 'react'
import ModalMain from './ModalMain';
import ModalSideBar from './ModalSideBar';

export default class ModalBody extends Component {

    render() {
        const { task, board } = this.props;
        if (!board) return 'loading..';
        //const { topic } = this.props;
        return (
            <div className="modal-body flex">
                <ModalMain task={task} />
                <ModalSideBar task={task} board={board} />
            </div>
        )
    }
}
