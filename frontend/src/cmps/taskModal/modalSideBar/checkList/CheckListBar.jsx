import React, { Component } from 'react'

export default class CheckListBar extends Component {

    doneTodosPercentage = () => {
        let doneTodosNum = 0;
        const { todos } = this.props.checkList
        for (const todo of todos) {
            if (todo.isDone) doneTodosNum++;
        }
        return (doneTodosNum / todos.length) * 100;
    }


    render() {
        return (
            <div id="myProgress">
                <div id="myBar" style={{ width: `${this.doneTodosPercentage()}%` }}>
                    <span>{this.doneTodosPercentage()}%</span>
                </div>
            </div>
        )
    }
}
