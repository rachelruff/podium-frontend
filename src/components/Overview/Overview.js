import React, { Component } from "react";
import StarsVerticalGraph from "./StarsVerticalGraph";

import starImg from "./star.png";

import "./Overview.css";

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
    last30.map((review, i) => {
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

    last30.length && !reviewCount ? this.getStats() : null;

    return (
      <div className="overview-container">
      <h1>30-day Overview</h1>
      <div className="overview-content-full container">
        <div className="overview-content-top">
          <div className="overview-content--star-average">
            <img src={starImg} alt="star" />
            <p>{avgStars ? `${avgStars.toFixed(1)}-star avg.` : null}</p>
          </div>
          <div className="overview-content--reveiw-count">
            <h3>{reviewCount}</h3>
            <p>{reviewCount === 1 ? "Review" : "Reviews"}</p>
          </div>
        </div>
        <div className="overview-star-graph">
        <h3>Breakdown by review:</h3>
          <StarsVerticalGraph
            data={{
              fiveStar: fiveStarArr.length,
              fourStar: fourStarArr.length,
              threeStar: threeStarArr.length,
              twoStar: twoStarArr.length,
              oneStar: oneStarArr.length
            }}
          />
        </div>
        </div>
      </div>
    );
  }
}

export default Overview;
