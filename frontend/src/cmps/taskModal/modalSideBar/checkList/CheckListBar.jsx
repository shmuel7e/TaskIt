import React, { Component } from 'react'

export default class CheckListBar extends Component {

    doneTodosPercentage = () => {
        let doneTodosNum = 0;
        const { todos } = this.props.checkList
        for (const todo of todos) {
            if (todo.isDone) doneTodosNum++;
        }
        return (doneTodosNum / todos.length) * 100 + '%';
    }

    render() {
        const donePercentage = this.doneTodosPercentage();
        return (
            <div className="checklist-bar">
                <div className="progress-bar" style={{ width: donePercentage }}>
                    <span>{donePercentage === '0%' ? '' : donePercentage}</span>
                </div>
            </div>
        )
    }
}
