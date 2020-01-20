import React, { Component } from 'react'

export default class ModalComments extends Component {

    onTxtChange = (editedTxt) => {
        //console.log(editedTxt)
    }

    render() {
        return (
            <div className="add-comment-container">
                <div className="add-comment-txt" data-text='Write a comment...' suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent)}></div>
                <button className='main-button'>Post</button>
            </div>
        )
    }
}
