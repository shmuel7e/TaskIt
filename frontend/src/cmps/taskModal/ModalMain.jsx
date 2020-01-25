import React, { Component } from 'react'
import ModalComments from './ModalComments';
import ModalActivity from './ModalActivity';
import ModalCommentList from './modalComment/ModalCommentList.jsx'

export default class ModalMain extends Component {

    state = { isModalShown: false }

    toggleModalComments = () => {
        this.setState(prevState => ({
            isModalShown: !prevState.isModalShown
        }));
    }

    onTxtChange = (editedTxt) => {
        this.props.changeTaskDesc(editedTxt)
    }

    render() {
        const { task, changeTodo,deleteChecklist,deleteTodo, getInitials ,addTodo,addActivityComment} = this.props;
        return (
            <div className='modal-main-container'>
                <div className="modal-activity flex">
                    <ModalActivity
                        task={task}
                        addTodo = {addTodo}
                        changeTodo={changeTodo}
                        deleteTodo={deleteTodo}
                        getInitials={getInitials}
                        deleteChecklist={deleteChecklist}
                         />

                </div>
                <div className="sub-title">Description
                <span className="icon-paragraph-left"></span>
                </div>
                <div className="modal-txt description" data-text='Add description...' suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent)}>
                    {task.description}
                </div>
                <div className="sub-title">Activity
                <span className="icon-message"></span>
                </div>
                <div className="comment-box">
                    <div className={this.state.isModalShown?'add-comment-title add-comment-margin':'add-comment-title'} onClick={this.toggleModalComments}>Write a comment...</div>
                    {this.state.isModalShown ? <ModalComments addActivityComment={addActivityComment} toggleModalComments={this.toggleModalComments} /> : ''}
                </div>
                <ModalCommentList task={task}  getInitials={getInitials}/>
                
            </div>
        )
    }
}
