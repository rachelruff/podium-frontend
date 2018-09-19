import React, { Component } from "react";
import axios from "axios";

import auth from "./config.js";

import "./App.css";

import Overview from "./components/Overview/Overview.js";
import ReviewsSnapshot from "./components/ReviewsSnapshot/ReviewsSnapshot.js";
import MonthGraph from "./components/MonthGraph/MonthGraph.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      last30DayReviews: []
    };
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews = () => {
    const config = {
      headers: { Authorization: auth.accessToken }
    };

    const URL = "http://shakespeare.podium.co/api/reviews";
    axios
      .get(URL, config)
      .then(resp => {
        ///Changed the date to be 9/5/2016 00:00:00 since that's when the data ends -- if working with live data, remove the date

        let today = new Date("9/5/2016");
        let prevMonth = new Date(today.setMonth(today.getMonth() - 1)).setHours(0,0,0,0);
        let last30DayReviews = [];
        resp.data.data.map(
          review =>
            new Date(review.publish_date) >= prevMonth
              ? last30DayReviews.push(review)
              : null
        );
        this.setState({
          reviews: resp.data.data,
          last30DayReviews,
          today
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { reviews, last30DayReviews, today } = this.state;
console.log(reviews)
    return (
      <div className="App">
        <Overview last30={last30DayReviews} />
        {last30DayReviews.length ? <ReviewsSnapshot reviews={reviews} last30={last30DayReviews} /> : null}
        {reviews.length ? <MonthGraph reviews={reviews} /> : null}

        
      </div>
    );
  }
}

export default App;
