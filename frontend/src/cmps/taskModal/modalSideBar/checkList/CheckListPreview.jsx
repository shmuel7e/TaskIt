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

    render() {
        const { checkList, changeTodo } = this.props;
        return (
            <div className='checklist-container'>
                <h3 className="members-on-task-title">{checkList.title}</h3>
                <CheckListBar checkList={checkList} />
                <TodoList todos={checkList.todos} checkList={checkList} changeTodo={changeTodo} />
                {/* TODO move to component! */}
                {this.state.isModalShown ? '' : <button className='add-todo-btn' onClick={this.onToggleForm}>Add todo</button>}
                {this.state.isModalShown ? 
                <div className="add-todo-form">
                    <div className="add-todo-txt" suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent)}></div>
                    <button className='add-todo-btn' onClick={this.onAddTodo}>Add todo</button>
                </div>: ''}
            </div>
        )
    }
}
