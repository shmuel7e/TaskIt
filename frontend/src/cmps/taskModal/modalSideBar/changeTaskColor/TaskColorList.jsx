import React, { Component } from 'react';
import ImageService from '../../../../services/ImageService.js';
import TaskColorPreview from './TaskColorPreview.jsx';

export default class TaskColorList extends Component {

    state={color:[]};

    componentDidMount() {
        this.getGalleryColors();
    }

    getGalleryColors = async () => {
        const colors = await ImageService.getGalleryColors();
        await this.setState({ colors });

    }

    render() {
        if(!this.state.colors) return 'Loading...';
        return (
            <div className="task-color-gallery"> {this.state.colors.map((color, idx) => {
                return <TaskColorPreview color={color} key={idx} changeTaskColor={this.props.changeTaskColor}/>
            })}
            </div>
        )
    }
}
