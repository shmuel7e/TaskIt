import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class DatePick extends React.Component {
    state = {
        startDate: Date.now()
    };

    handleChange = date => {
        let formatted_date = date.toDateString()
        this.onAddDueTimeToTask(formatted_date);
    };

    onAddDueTimeToTask = (dueTime) => {
        this.props.addDueTimeToTask(dueTime);
    }

    render() {
        return (
            <div className="date-picker">
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}