import React, { Component } from "react";

import auth from "./config.js";

class ReviewCard extends Component {
  componentDidMount() {
    getReview(this.props.id);
  }

  getReview = id => {
    const config = {
      headers: { Authorization: auth.accessToken }
    };
    const URL = `http://shakespeare.podium.co/api/reviews/${id}`;
    axios
      .get(URL, config)
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  };
  render() {
    return <div />;
  }
}

export default ReviewCard;
