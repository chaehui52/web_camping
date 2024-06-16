import React, { useState } from 'react';
import './Review.css';

function WriteReviewPage() {
  const [photoUrl, setPhotoUrl] = useState('');

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhotoUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="writeReviewContainer">
      <h1>리뷰 작성</h1>
      <div className="button registerButton">
        <div className="buttonText">등록</div>
      </div>
      <div className="button cancelButton">
        <div className="buttonText">취소</div>
      </div>
      <div className="rectangle56" onClick={() => document.getElementById('photoInput').click()}>
        {photoUrl ? (
          <img className="reviewPhoto" src={photoUrl} alt="Uploaded" />
        ) : (
          <div className="addPhotoText">사진 추가</div>
        )}
        <input id="photoInput" className="photoInput" type="file" accept="image/*" onChange={handlePhotoUpload} />
      </div>
      <div className="rectangle57">
        <textarea className="reviewContentInput" placeholder="세부 리뷰 내용 입력"></textarea>
      </div>
      <div className="rectangle58">
        <input className="reviewTitleInput" type="text" placeholder="리뷰 제목 입력" />
      </div>
    </div>
  );
}

export default WriteReviewPage;
