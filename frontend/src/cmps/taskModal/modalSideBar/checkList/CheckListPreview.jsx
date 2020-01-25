import React, { Component } from 'react';
import TodoList from './TodoList';
import CheckListBar from './CheckListBar';

export default class CheckListPreview extends Component {

    state = { todoTitle: '', isModalShown: false }

    onAddTodo = () => {
        this.onToggleForm();
        this.props.addTodo(this.props.checkList, this.state.todoTitle);
    }

    onTxtChange = (todoTitle) => {
        this.setState({ todoTitle })
    }

    onToggleForm = () => {
        this.setState(prevState => ({
            isModalShown: !prevState.isModalShown
        }));
    }

    onDeleteChecklist = () => {
        this.props.deleteChecklist(this.props.checkList);
    }

    render() {
        const { checkList, changeTodo,deleteTodo } = this.props;
        return (
            <div className='checklist-container'>
                <div className="checklist-header flex justify-between align-center">
                    <h3 className="members-on-task-title">{checkList.title}</h3>
                    <button onClick={this.onDeleteChecklist} className='add-todo-btn checklist-delete-btn'>Delete</button>
                </div>
                <CheckListBar checkList={checkList} />
                <TodoList todos={checkList.todos} checkList={checkList} deleteTodo={deleteTodo} changeTodo={changeTodo} />
                {/* TODO move to component! */}
                {this.state.isModalShown ? '' : <button className='add-todo-btn' onClick={this.onToggleForm}>Add todo</button>}
                {this.state.isModalShown ?
                    <div className="add-todo-form">
                        <div className="add-todo-txt" suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent)}></div>
                        <button className='add-todo-btn' onClick={this.onAddTodo}>Add todo</button>
                    </div> : ''}
            </div>
        )
    }
}
