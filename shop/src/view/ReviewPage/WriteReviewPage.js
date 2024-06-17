import React, { useState } from 'react';
import './Review.css';
import axios from 'axios'; // Axios 라이브러리 추가

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: 'http://localhost:4000', // baseURL 설정
  timeout: 10000, // 요청 타임아웃 설정 (옵션)
  headers: {
    'Content-Type': 'application/json',
    // 기타 필요한 헤더 설정
  }
});

function WriteReviewPage({ reviews, ClientID, addReview }) {
  const [picUrl, setPicUrl] = useState('');
  const [coment, setComent] = useState('');
  const [reviewID, setReviewID] = useState('');
  const [groundID, setGroundID] = useState('');
  const [resID, setResID] = useState('');
  const [Title, setTitle] = useState('');

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPicUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      picUrl,
      coment,
      reviewID,
      groundID,
      resID,
      Title
      
    };

    api.post('/review/write', formData)
      .then(response => {
        console.log('서버 응답:', response.data);
        // 서버 응답에 따라 추가적인 로직을 처리할 수 있습니다.
        addReview(formData);
      })
      .catch(error => {
        console.error('서버 요청 실패:', error);
        // 에러 처리 로직을 추가할 수 있습니다.
      });
  };

  return (
    <div className="writeReviewContainer">
      <h1>리뷰 작성</h1>
      <div className="rectangle56" onClick={() => document.getElementById('photoInput').click()}>
        {picUrl ? (
          <img className="reviewPhoto" src={picUrl} alt="Uploaded" />
        ) : (
          <div className="addPhotoText">사진 추가</div>
        )}
        <input id="photoInput" className="photoInput" type="file" accept="image/*" onChange={handlePhotoUpload} />
      </div>
      <div className="rectangle58">
        <textarea className="reviewTitleInput" placeholder="제목 입력" value={Title} onChange={(e) => setTitle(e.target.value)}></textarea>
      </div>
      <div className="rectangle57">
        <textarea className="reviewContentInput" placeholder="세부 리뷰 내용 입력" value={coment} onChange={(e) => setComent(e.target.value)}></textarea>
      </div>
      <form onSubmit={handleSubmit}>
      <button type="submit" className='button registerButton'>
          <span className="buttonText">등록</span>
        </button>
      </form>
      <button type="button" className='button cancelButton' onClick={() => window.history.back()}>
        <span className="buttonText2">취소</span>
      </button>
    </div>
  );
}

export default WriteReviewPage;

