import React, { useState, useEffect } from 'react';
import './Review.css';
import axios from 'axios';

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: 'http://localhost:4000', // baseURL 설정
  timeout: 10000, // 요청 타임아웃 설정 (옵션)
  headers: {
    'Content-Type': 'application/json',
    // 기타 필요한 헤더 설정
  }
});

function WriteReviewCheck({ reviewsData }) {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchReview();
  }, []);

  const fetchReview = async () => {
    try {
      const response = await api.get('/review/check');
      setReview(response.data);
    } catch (error) {
      console.error('리뷰 조회 실패:', error);
    }
  };

  return (
    <div className="container">
      <h1>리뷰 확인</h1>
      {review.map((review, index) => (
        <div key={index} className="reviewContainer">
          <img className="reviewImage" src={review.picUrl} alt={`Review ${index}`} />
          <div className="title">{review.Title}</div>
          <div className="userName">{review.userName}</div>
          <div className="comment">{review.coment}</div>
          
          {/* 필요한 추가 필드가 있다면 여기에 추가하세요 */}
        </div>
      ))}
    </div>
  );
}

export default WriteReviewCheck;
