import React, { Component } from "react";
import axios from "axios";

class ReviewsShow extends Component {
  componentDidMount() {
    const accessToken = "koOheljmQX";
    const config = {
      headers: { Authorization: "Bearer " + accessToken }
    };
    const id = '9783221620868';
    const URL = `http://shakespeare.podium.co/api/reviews/${id}`;
    axios
      .get(URL, config)
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  }
  render() {
    return <div />;
  }
}

export default ReviewsShow;
