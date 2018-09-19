import React, { Component } from "react";
import axios from "axios";
import auth from "../../config.js";

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

    return (
      <div>
        <div>{review.author}</div>
        <div>{review.rating}</div>
        <div>{review.publish_date}</div>
        <div>{review.body}</div>
      </div>
    );
  }
}

export default ReviewCard;
