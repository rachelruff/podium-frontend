import React, { Component } from "react";
import axios from "axios";
import accessToken from '../../config.js'

class ReviewsIndex extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews = () => {
    let dummyData = {
      data: [
        {
          rating: 0.8,
          publish_date: "2016-09-05T23:25:47.642350Z",
          id: "9783221620868",
          author: "Kaley Schiller"
        },
        {
          rating: 3.2,
          publish_date: "2016-09-04T23:25:47.642388Z",
          id: "9793364045824",
          author: "Fay Lemke"
        }
      ]
    };

    const config = {
      headers: { Authorization: "Bearer " + accessToken.accessToken }
    };
    
    const URL = "http://shakespeare.podium.co/api/reviews";
    axios
      .get(URL, config)
      .then(resp => {
        console.log("hit then", resp);
        this.setState({
          reviews: resp.data
        });
      })
      .catch(err => {
        console.log("hit err", err);
        this.setState({
          reviews: dummyData.data
        });
      });
  };

  render() {
    const { reviews } = this.state;
    return (
      <div>
        {reviews.map(review => (
          <div>
            <p>{review.rating}</p>
            <p>{review.publish_date}</p>
            <p>{review.author}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ReviewsIndex;
