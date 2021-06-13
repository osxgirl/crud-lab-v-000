import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review, actions } = this.props;

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={_=> actions.deleteReview(review.id)}> X </button>
      </div>
    );
  }

};

export default Review;
