import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class StarsByMonthGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curMonth: "",
      month1: "",
      month2: "",
      month3: "",
      month4: "",
      month5: ""
    };
  }

  componentDidMount() {
    this.separateByMonth(this.props.reviews);
  }

  separateByMonth = reviews => {
    let curMonthArr = [];
    let month1Arr = [];
    let month2Arr = [];
    let month3Arr = [];
    let month4Arr = [];
    let month5Arr = [];
    reviews.map(review => {
      ///Changed the date to be 9/5/2016 since that's when the data ends -- if working with live data, remove the date
      let today = new Date("9/5/2016");
      if (
        new Date(review.publish_date).getMonth() === today.getMonth() &&
        new Date(review.publish_date).getYear() === today.getYear()
      ) {
        curMonthArr.push(review.rating);
      } else if (
        new Date(review.publish_date).getMonth() === today.getMonth() - 1 &&
        new Date(review.publish_date).getYear() === today.getYear()
      ) {
        month1Arr.push(review.rating);
      } else if (
        new Date(review.publish_date).getMonth() === today.getMonth() - 2 &&
        new Date(review.publish_date).getYear() === today.getYear()
      ) {
        month2Arr.push(review.rating);
      } else if (
        new Date(review.publish_date).getMonth() === today.getMonth() - 3 &&
        new Date(review.publish_date).getYear() === today.getYear()
      ) {
        month3Arr.push(review.rating);
      } else if (
        new Date(review.publish_date).getMonth() === today.getMonth() - 4 &&
        new Date(review.publish_date).getYear() === today.getYear()
      ) {
        month4Arr.push(review.rating);
      } else console.log("no");
    });
    let curMonth = "";
    let month1 = "";
    let month2 = "";
    let month3 = "";
    let month4 = "";

    //Get the average ratings for each month

    curMonth = curMonthArr.reduce((a, b) => a + b) / curMonthArr.length;
    month1 = month1Arr.reduce((a, b) => a + b) / month1Arr.length;
    month2 = month2Arr.reduce((a, b) => a + b) / month2Arr.length;
    month3 = month3Arr.reduce((a, b) => a + b) / month3Arr.length;
    month4 = month4Arr.reduce((a, b) => a + b) / month4Arr.length;

    curMonthArr.map(review => review.rating);
    this.setState({
      curMonth: curMonth.toFixed(1),
      month1: month1.toFixed(1),
      month2: month2.toFixed(1),
      month3: month3.toFixed(1),
      month4: month4.toFixed(1)
    });
  };
  render() {
    const { curMonth, month1, month2, month3, month4 } = this.state;

    //Set the month name data points for x-axis

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ];

    const chartData = {
      labels: [
        monthNames[new Date("9/5/2016").getMonth() - 4],
        monthNames[new Date("9/5/2016").getMonth() - 3],
        monthNames[new Date("9/5/2016").getMonth() - 2],
        monthNames[new Date("9/5/2016").getMonth() - 1],
        monthNames[new Date("9/5/2016").getMonth()]
      ],
      datasets: [
        {
          data: [curMonth, month1, month2, month3, month4],
          backgroundColor: ["#99c4b3", "#99c4b3", "#99c4b3", "#99c4b3"]
        }
      ]
    };

    const chartOptions = {
      legend: {
        display: false
      },

      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 5
            }
          }
        ]
      }
    };

    return <Bar data={chartData} options={chartOptions} />;
  }
}
export default StarsByMonthGraph;
