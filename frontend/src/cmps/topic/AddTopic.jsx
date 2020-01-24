import React, { Component } from 'react'

export default class AddTopic extends Component {
    state = { isOpenForm: false,topic:'' }
    onToggleForm = () => {
        let isOpenForm = !this.state.isOpenForm
        this.setState({ isOpenForm })
    }
    inputChange = (ev) => {
        let value = ev.target.value
        this.setState({ topic:value })
    }
    onAddList=()=>{
        if(this.state.topic === '') return;
        this.props.onAddNewTopic(this.state.topic)
        this.setState({ topic:''})
        this.onToggleForm()
    }

    onkeyup = (ev) => {
        if (ev.keyCode === 13) this.onAddList();
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.isOpenForm ? <div onClick={this.onToggleForm} className="add-topic">
                    <span className="icon-plus"></span>
                    Add another topic
            </div> :
                    <div className="add-topic flex column">
                        <input
                        onKeyUp={this.onkeyup}
                        onChange={this.inputChange}
                        name="topic"
                         type="text" 
                         placeholder="Enter topic title..." />
                        <div className="buttuns-topic-form flex align-center">
                            <button onClick={this.onAddList}>Add Topic</button>
                            <span
                                onClick={this.onToggleForm}
                                className="icon-cross close-form">
                            </span>
                        </div>
                    </div>}
            </React.Fragment>

        )
    }
}
