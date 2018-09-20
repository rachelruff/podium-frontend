import React, { Component } from "react";
import axios from "axios";

import auth from "../../config.js";

import "./HomePage.css";

import Overview from "../Overview/Overview.js";
import ReviewsSnapshot from "../ReviewsSnapshot/ReviewsSnapshot.js";
import MonthGraph from "../MonthGraph/MonthGraph.js";
import Header from "../Header/Header.js";

class HomePage extends Component {
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
        let prevMonth = new Date(today.setMonth(today.getMonth() - 1)).setHours(
          0,
          0,
          0,
          0
        );
        let last30DayReviews = [];
        resp.data.data.map(
          review =>
            new Date(review.publish_date) >= prevMonth
              ? last30DayReviews.push(review)
              : null
        );
        this.setState({
          reviews: resp.data.data,
          last30DayReviews
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { reviews, last30DayReviews } = this.state;

    return (
      <div className="home-page-container">
        <div className="home-page-left">
          <Overview last30={last30DayReviews} />
          {reviews.length ? <MonthGraph reviews={reviews} /> : null}
        </div>
        <div className="home-page-right">
          {last30DayReviews.length ? (
            <ReviewsSnapshot reviews={reviews} last30={last30DayReviews} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default HomePage;
