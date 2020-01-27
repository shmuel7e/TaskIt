import eventBusService from "../services/EventBusService.js";

export default class MsgModal extends React.Component {
    eventKiller = null;

    state = { display: false, car: null }

    componentDidMount() {
        this.eventKiller = eventBusService.on('toggleModal', (car) => {
            this.setState(prevState => ({ display: !prevState.display, car }))
        })
    }


    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }

    render() {
        if (!this.state.display) return null;
        return <div>Very Cool Dialog   {this.state.car.name}</div >
    }
} 