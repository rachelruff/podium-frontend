import React, { Component } from 'react';
import StarsByMonthGraph from './StarsByMonthGraph';

class MonthGraph extends Component {
    render() {
        return (
            <div>
                <h1>Monthly Breakdown</h1>
                <StarsByMonthGraph reviews={this.props.reviews}/>
                <button>View Details by Month</button>
            </div>
        );
    }
}

export default MonthGraph;