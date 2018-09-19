import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

import "./Overview.css";

class StarsVerticalGraph extends Component {
  render() {
    const { data } = this.props;
    const dataValues = {
      labels: ["5 Star", "4 Star", "3 Star", "2 Star", "1 Star"],
      datasets: [
        {
          backgroundColor: "#ffe793",
          hoverBackgroundColor: "#ffd33d",
          data: [
            data.fiveStar,
            data.fourStar,
            data.threeStar,
            data.twoStar,
            data.oneStar
          ]
          //   [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    return (
      <div className="stars-vert-graph-container">
        <HorizontalBar
          data={dataValues}
          options={{
            legend: {
              display: false
            }
          }}
        />
      </div>
    );
  }
}

export default StarsVerticalGraph;
