import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class MonthGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Month",
          "Month",
          "Month",
          "Month",
          "Month",
          "Month",
        ],
        datasets: [
          {
            // label: "Losses",
            data: [0.3, 1.4, 4.1, 3.4, 3, 4],
            backgroundColor: [
            //   "#0097A7",
            //   "#0288D1",
            //   "#303F9F",
              "#00BFA5",
            //   "#C51162",
            //   "#9C27B0",
            //   "#880E4F"
            ]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="prof-chart">
        <Bar
          data={this.state.chartData}
          options={{
            legend: false,
            
          }}
        />
      </div>
    );
  }
}

export default MonthGraph;
