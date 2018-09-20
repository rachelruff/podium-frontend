import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard.js";

import "./ReviewSnapshot.css";

class ReviewsSnapshot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highReviews: [],
      lowReviews: []
    };
  }
  componentDidMount() {
    this.sortReviews(this.props.last30);
  }

  sortReviews = last30 => {
    let highReviews = [];
    let lowReviews = [];
    let sorted = last30.sort((a, b) => {
      return a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0;
    });
    lowReviews = sorted.splice(0, 3);
    highReviews = sorted.splice(sorted.length - 3, 3).sort((a, b) => {
      return a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0;
    });

    this.setState({
      highReviews,
      lowReviews
    });
  };

  render() {
    const { highReviews, lowReviews } = this.state;

    return (
      <div className="review-snapshot-container">
        <h1>
          Recent Reviews <span>(30 days)</span>
        </h1>
        <div className="review-snapshot-content container">
          <div className="review-snapshot-highest-container">
            <h2>Highest</h2>
            <div className="review-snapshot-high-reviews">
              {highReviews.map(review => (
                <ReviewCard id={review.id} />
              ))}
            </div>
          </div>
          <div className="review-snapshot-lowest-container">
            <h2>Lowest</h2>
            <div className="review-snapshot-low-reviews">
              {lowReviews.map(review => (
                <ReviewCard id={review.id} />
              ))}
            </div>
          </div>
        </div>
        <Link to='/all-reviews'>
          <button>All Reviews</button>
        </Link>
      </div>
    );
  }
}

export default ReviewsSnapshot;
