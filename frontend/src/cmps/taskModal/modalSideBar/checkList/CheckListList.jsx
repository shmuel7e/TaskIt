import React, { Component } from 'react';
import CheckListPreview from './CheckListPreview.jsx';

export default class CheckListList extends Component {
    render() {
        return (
            <div>
                {this.props.checkLists.map((checkList, idx) => {
                    return <CheckListPreview checkList={checkList} key={idx}/>
                })}
            </div>
        )
    }
}
