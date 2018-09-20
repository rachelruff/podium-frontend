import React, { Component } from "react";
import axios from "axios";

import auth from "../../config.js";
import ReviewCard from "../ReviewsSnapshot/ReviewCard.js";

import "./AllReviews.css";

class AllReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
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
        let sorted = resp.data.data.sort((a, b) => {
          return a.publish_date < b.publish_date
            ? 1
            : b.publish_date < a.publish_date
              ? -1
              : 0;
        });

        this.setState({
          reviews: sorted
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { reviews } = this.state;

    return (
      <div className='all-reviews-container container'>
      <h1>All Reviews</h1>
        {reviews.map(review => (
          <ReviewCard id={review.id} />
        ))}
      </div>
    );
  }
}

export default AllReviews;
