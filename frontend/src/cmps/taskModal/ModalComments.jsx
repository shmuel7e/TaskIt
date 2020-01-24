import React, { Component } from 'react'

export default class ModalComments extends Component {
    state={activityTxt:''}
    onTxtChange = (ev,editedTxt) => {
        ev.preventDefault()
        ev.stopPropagation()
        this.setState({activityTxt:editedTxt})
        setTimeout(()=>{
            this.props.toggleModalComments()
        },200)
    }
    
    onPost=(ev)=>{
        ev.preventDefault()
        ev.stopPropagation()
        this.props.addActivityComment(this.state.activityTxt)
        document.getElementsByClassName('add-comment-txt')[0].innerHTML='';
        this.setState({activityTxt:''})
    }

    render() {
        return (
            <div className="add-comment-container">
                <div className="add-comment-txt" data-text='Write a comment...' suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e,e.target.textContent)}></div>
                <button onClick={this.onPost} className='main-btn'>Post</button>
            </div>
        )
    }
}
