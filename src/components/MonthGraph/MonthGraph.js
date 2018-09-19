import React, { Component } from "react";
import StarsByMonthGraph from "./StarsByMonthGraph";

import "./MonthGraph.css";

class MonthGraph extends Component {
  render() {
    return (
      <div className="month-graph-container">
        <h1>Monthly Breakdown</h1>
        <div className="container">
          <StarsByMonthGraph reviews={this.props.reviews} />
        </div>
        <button>View Details by Month</button>
      </div>
    );
  }
}

export default MonthGraph;
