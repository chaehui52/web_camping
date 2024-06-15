import logo from './logo.svg';
import '.ReviewPage//Review.css';

function WriteReviewPage() {
  return (
    <div className="writeReviewContainer">
    <div className="writeReviewTitle">리뷰 작성</div>
    <div className="button registerButton">
      <div className="buttonText">등록</div>
    </div>
    <div className="button cancelButton">
      <div className="buttonText">취소</div>
    </div>
    <div className="rectangle56">
      <input className="reviewTitleInput" type="text" placeholder="리뷰 제목 입력" />
    </div>
    <div className="rectangle57">
      <textarea className="reviewContentInput" placeholder="세부 리뷰 내용 입력"></textarea>
    </div>
    <div className="rectangle58"></div>
    <div className="addPhotoText">사진 추가</div>
  </div>
  );
}

export default WriteReviewPage;
