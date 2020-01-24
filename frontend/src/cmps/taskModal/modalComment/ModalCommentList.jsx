import React, { Component } from 'react'
import ModalCommentPreview from './ModalCommentPreview.jsx'
export default class ModalCommentList extends Component {
    render() {
      //  console.log(this.props.task)
        return (
            <ul>
                {this.props.task.comments.map((comment)=>{
                  const id=comment.date.getTime()
                  return  <li key={id}>
                        <ModalCommentPreview  comment={comment}/>
                    </li>
                })}
            </ul>
        )
    }
}
