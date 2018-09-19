import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avgStars: "",
      reviewCount: "",
      fiveStarArr: [],
      fourStarArr: [],
      threeStarArr: [],
      twoStarArr: [],
      oneStarArr: []
    };
  }

  getStats = () => {
    const { last30 } = this.props;
    let reviewCount = last30.length;
    // last30.map()
    let avgStars = "";
    let ratingsArr = [];
    let fiveStarArr = [];
    let fourStarArr = [];
    let threeStarArr = [];
    let twoStarArr = [];
    let oneStarArr = [];
    last30.map(review => {

    // separate into star count groups
     
      ratingsArr.push(review.rating);
      if (review.rating === 5) {
        fiveStarArr.push(review.rating);
      } else if (review.rating >= 4) {
        fourStarArr.push(review.rating);
      } else if (review.rating >= 3) {
        threeStarArr.push(review.rating);
      } else if (review.rating >= 2) {
        twoStarArr.push(review.rating);
      } else oneStarArr.push(review.rating);
    });

    // get the average of the ratings for past 30 days

    avgStars = ratingsArr.reduce((a, b) => a + b) / reviewCount;

    this.setState({
      avgStars,
      reviewCount,
      fiveStarArr,
      fourStarArr,
      threeStarArr,
      twoStarArr,
      oneStarArr
    });
  };

  render() {
    const { last30 } = this.props;
    const {
      avgStars,
      reviewCount,
      fiveStarArr,
      fourStarArr,
      threeStarArr,
      twoStarArr,
      oneStarArr
    } = this.state;

    this.props.last30.length && !reviewCount ? this.getStats() : null;

    return (
      <div>
        <div>
          <div>Star pic</div>
          <p>{avgStars ? avgStars.toFixed(1) : null}</p>
        </div>
        <div>
          <div>{reviewCount}</div>
          <p>{reviewCount === 1 ? "Review" : "Reviews"}</p>
        </div>
        <ul>
          <li>5 star ({fiveStarArr.length ? fiveStarArr.length : 0})</li>
          <li>4 star ({fourStarArr.length ? fourStarArr.length : 0})</li>
          <li>3 star ({threeStarArr.length ? threeStarArr.length : 0})</li>
          <li>2 star ({twoStarArr.length ? twoStarArr.length : 0})</li>
          <li>1 star ({oneStarArr.length ? oneStarArr.length : 0})</li>
        </ul>
      </div>
    );
  }
}

export default Overview;
