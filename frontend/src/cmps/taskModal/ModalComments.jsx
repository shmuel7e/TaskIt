import React, { Component } from 'react'

export default class ModalComments extends Component {
    state = { activityTxt: '' }
    componentDidMount() {
        this.autoFocus.focus();
    }
    onTxtChange = (ev) => {
        this.setState({ activityTxt: ev.target.textContent })
    }

    onPost = (ev) => {
         ev.preventDefault()
         ev.stopPropagation()
        this.props.addActivityComment(this.state.activityTxt)
        document.getElementsByClassName('add-comment-txt')[0].innerHTML = '';
        this.setState({ activityTxt: '' })
       
    }
    closeModal=()=>{
        setTimeout(()=>{
            this.props.toggleModalComments()
        }, 400)
    }

    render() {
        return (
            <div className="add-comment-container" onBlur={this.closeModal}>
                <div className="add-comment-txt"
                    ref={(input) => { this.autoFocus = input; }}
                    data-text='Write a comment...'
                    suppressContentEditableWarning={true}
                    contentEditable="true"
                    onBlur={this.onTxtChange}
                    >
                </div>
                <button onClick={this.onPost} className='main-btn'>Post</button>
    
            </div>
        )
    }
}
