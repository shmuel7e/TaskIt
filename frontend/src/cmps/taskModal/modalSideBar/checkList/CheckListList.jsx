import React, { Component } from 'react';
import CheckListPreview from './CheckListPreview.jsx';

export default class CheckListList extends Component {
    render() {
        const { changeTodo, checkLists, deleteTodo,addTodo, deleteChecklist } = this.props;
        return (
            <div>
                {checkLists.map((checkList, idx) => {
                    return <CheckListPreview
                        key={idx}
                        addTodo={addTodo}
                        checkList={checkList}
                        deleteTodo={deleteTodo}
                        changeTodo={changeTodo}
                        deleteChecklist={deleteChecklist}
                    />
                })}
            </div>
        )
    }
}
