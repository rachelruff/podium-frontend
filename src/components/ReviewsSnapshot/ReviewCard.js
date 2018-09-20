import React, { Component } from "react";
import axios from "axios";

import auth from "../../config.js";
import avatarCircle from "./avatarCircle.png";

import "./ReviewSnapshot.css";

class ReviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {}
    };
  }

  componentDidMount() {
    this.getReview(this.props.id);
  }

  getReview = id => {
    const config = {
      headers: { Authorization: auth.accessToken }
    };
    const URL = `http://shakespeare.podium.co/api/reviews/${id}`;
    axios
      .get(URL, config)
      .then(resp => this.setState({ review: resp.data.data }))
      .catch(err => console.log(err));
  };
  render() {
    // console.log(this.state.review);
    const { review } = this.state;
    let width = `${(review.rating / 5) * 100}%`;
    console.log(width);
    let styles = {
      width: width
    };
    return (
      <div className="review-card-container">
        <div className="review-card-container--poster-info">
          <img src={avatarCircle} />
          <div>{review.author}</div>
        </div>
        <div className="review-card-rating-and-stars">
          <div className="review-card-star-ratings-container">
            <div className="star-ratings-css">
              <div className="star-ratings-css-top" style={styles}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <div className="star-ratings-css-bottom">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
          <div className="review-card-rating">{review.rating}</div>
        </div>
        <p className='review-card-text-body'>"{review.body}"</p>
        <div className="review-card-post-date">
          {new Date(review.publish_date).toLocaleDateString("en-US")}
        </div>
      </div>
    );
  }
}

export default ReviewCard;
