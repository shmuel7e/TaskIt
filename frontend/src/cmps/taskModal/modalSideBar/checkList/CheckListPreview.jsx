import React, { Component } from 'react';
import TodoList from './TodoList';
import CheckListBar from './CheckListBar';

export default class CheckListPreview extends Component {

    onAddTodo = () => {
        this.props.addTodo(this.props.checkList);
    }

    render() {
        const {checkList, changeTodo} = this.props;
        return (
            <div className='checklist-container'>
                <h3 className="members-on-task-title">{checkList.title}</h3>
                <CheckListBar checkList={checkList}/>
                <TodoList todos={checkList.todos} checkList={checkList} changeTodo={changeTodo}/>
                <button className='add-todo-btn' onClick={this.onAddTodo}>Add todo</button>
            </div>
        )
    }
}
