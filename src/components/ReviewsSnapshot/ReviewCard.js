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

  getReview = id => {
    const config = {
      headers: { Authorization: auth.accessToken }
    };
    const URL = `http://shakespeare.podium.co/api/reviews/${id}`;
    axios
      .get(URL, config)
      .then(resp => this.setState({ review: resp.data }))
      .catch(err => console.log(err));
  };
  render() {
    this.state.review === {} ? this.getReview(this.props.id) : null;
    console.log('hit')

    return <div />;
  }
}

export default ReviewCard;
