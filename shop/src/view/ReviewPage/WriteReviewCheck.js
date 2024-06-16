import React from 'react';
import './Review.css';

function WriteReviewCheck({ reviews }) {
  return (
    <div className="container">
      <h1>리뷰 확인</h1>
      {reviews.map((review, index) => (
        <div key={index} className="reviewContainer">
          <img className="reviewImage" src={review.imgSrc} alt={`Review ${index}`} />
          <div className="userName">User{index + 1}</div>
          <div className="comment">{review.content}</div>
          <div className="reviewTitle">{review.title}</div>
          {/* 필요한 추가 필드가 있다면 여기에 추가하세요 */}
        </div>
      ))}
    </div>
  );
}

export default WriteReviewCheck;
