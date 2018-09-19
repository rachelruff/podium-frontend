import React, { Component } from "react";
import ReviewCard from "./ReviewCard.js";

class ReviewsSnapshot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highReviews: [],
      lowReviews: []
    };
  }
  componentDidMount() {

    const { last30 } = this.props;
    console.log(last30)
    this.sortReviews();
  }

  sortReviews = () => {
   
    console.log("hit");
    let highReviews = [];
    let lowReviews = []
    let sorted = this.props.last30.sort((a, b) => {
      return a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0;
    });
    lowReviews = sorted.splice(0, 3);
    highReviews = sorted.splice(sorted.length-3, 3).sort((a, b) => {
      return a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0;
    });
    console.log({highReviews, lowReviews});
    this.setState({
      highReviews,
      lowReviews
    })
  };

  render() {
    const { last30 } = this.props;
    const { highReviews, lowReviews } = this.state;
console.log(last30.length, highReviews.length)
    // this.state.highReviews === [] && this.props.last30.length ? this.sortReviews() : null;

    console.log(highReviews, lowReviews);
    return (
      <div>
        <h1>
          Recent Reviews <span>(30 days)</span>
        </h1>
        <div>
          <h2>Highest</h2>
          {highReviews.map(review => (
            <ReviewCard id={review.id} />
          ))}
        </div>
        <div>
          <h2>Lowest</h2>
          {lowReviews.map(review => (
            <ReviewCard id={review.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default ReviewsSnapshot;
