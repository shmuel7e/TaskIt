import React, { Component } from 'react'
import eventBusService from "../services/EventBusService.js";

export default class MsgModal extends Component {
    eventKiller = null;

    state = { display: false, data:null}

    componentDidMount() {
        this.eventKiller = eventBusService.on('toggleModal', (data) => {
           const time=data.style ==='success' ? 2500 :4500
            this.setState(prevState => ({ display: !prevState.display,data}))
            setTimeout(()=>{
                this.setState({display:false})
            },time)
        })
      
    }


    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }

    render() {
        if (!this.state.display) return null;
        return <div className={`msg-modal-container flex justify-center align-center ${this.state.data.style}`}>
            {this.state.data.msg}
        </div >
    }
} 