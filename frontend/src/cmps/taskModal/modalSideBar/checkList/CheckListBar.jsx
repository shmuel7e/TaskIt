import React, { Component } from 'react'

export default class CheckListBar extends Component {

    doneTodosPercentage = () => {
        let doneCounter = 0;
        const { todos } = this.props.checkList
        if(!todos.length) return;
        for (const todo of todos) {
            if (todo.isDone) doneCounter++;
        }
        return ((doneCounter / todos.length) * 100).toFixed(0) + '%';
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
