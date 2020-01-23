import React, { Component } from 'react';
import CheckListPreview from './CheckListPreview.jsx';

export default class CheckListList extends Component {
    render() {
        const {changeTodo, checkLists, addTodo} = this.props;
        return (
            <div>
                {checkLists.map((checkList, idx) => {
                    return <CheckListPreview addTodo = {addTodo} changeTodo={changeTodo} checkList={checkList} key={idx}/>
                })}
            </div>
        )
    }
}
