import React, { Component } from 'react';
import CheckListPreview from './CheckListPreview.jsx';

export default class CheckListList extends Component {
    render() {
        const {changeTodo, checkLists} = this.props;
        return (
            <div>
                {checkLists.map((checkList, idx) => {
                    return <CheckListPreview changeTodo={changeTodo} checkList={checkList} key={idx}/>
                })}
            </div>
        )
    }
}
