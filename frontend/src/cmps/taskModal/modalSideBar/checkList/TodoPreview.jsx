import React, { Component } from 'react';

export default class TodoPreview extends Component {

    onToggleTodo = (todo) => {
        todo.isDone = !todo.isDone
        this.props.changeTodo(this.props.checkList, todo);
    }

    onTodoTxtChange = (txt, todo) => {
        todo.title = txt;
        this.props.changeTodo(this.props.checkList, todo);
    }

    onDeleteTodo = () => {
        this.props.deleteTodo(this.props.checkList, this.props.todo);
    }

    render() {
        const { todo } = this.props;
        return (
            <div className='todo-container flex justify-between align-center'>
                <div className="todo-content flex align-center">
                    <input className="todo-checkbox" type="checkbox" checked={todo.isDone} onChange={() => this.onToggleTodo(todo)}></input>
                    <span data-text="Todo" className={todo.isDone ? 'todo-done todo-txt' : 'todo-txt'} suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTodoTxtChange(e.target.textContent, todo)}>
                        {todo.title}
                    </span>
                </div>
                <span onClick={this.onDeleteTodo} className="icon-trash"></span>
            </div>
        )
    }
}
