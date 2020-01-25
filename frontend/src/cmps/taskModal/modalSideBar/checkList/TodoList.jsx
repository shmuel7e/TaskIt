import React, { Component } from 'react';
import TodoPreview from './TodoPreview.jsx';

export default class TodoList extends Component {
    render() {
        const { checkList, todos, changeTodo ,deleteTodo} = this.props;
        return (
            <div>
                {todos.map((todo, idx) => {
                    return <TodoPreview deleteTodo={deleteTodo} changeTodo={changeTodo} checkList={checkList} todo={todo} key={idx} />
                })}
            </div>
        )
    }
}
