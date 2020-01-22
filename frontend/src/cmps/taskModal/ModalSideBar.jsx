import React, { Component } from 'react'
import ToolBar from './modalSideBar/ToolBar'
import ActionBar from './modalSideBar/ActionBar'

export default class ModalSideBar extends Component {


    render() {
        const { board, addMemberToTask, addLabelToTask, deleteTask, cloneTask, getInitials, changeTaskColor } = this.props;
        return (
            <div className='modal-sidebar-container flex column justify-between'>
                <ToolBar
                    board={board}
                    addDueTimeToTask={this.props.addDueTimeToTask}
                    addMemberToTask={addMemberToTask}
                    addLabelToTask={addLabelToTask}
                    getInitials={getInitials} />

                <ActionBar
                    changeTaskColor={changeTaskColor}
                    deleteTask={deleteTask}
                    cloneTask={cloneTask}
                />
            </div>
        )
    }
}
