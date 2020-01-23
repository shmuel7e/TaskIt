import React, { Component } from 'react';
import TodoPreview from './TodoPreview.jsx';

export default class TodoList extends Component {
    render() {
        const { checkList, todos, changeTodo } = this.props;
        return (
            <div>
                {todos.map((todo, idx) => {
                    return <TodoPreview changeTodo={changeTodo} checkList={checkList} todo={todo} key={idx} />
                })}
            </div>
        )
    }
}
