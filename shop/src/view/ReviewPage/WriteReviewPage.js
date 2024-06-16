
function WriteReviewPage() {
  return (
<div style={{width: 960, height: 540, position: 'relative', background: 'white'}}>
  <div style={{left: 30, top: 31, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>리뷰 작성</div>
  <div className="Button" style={{width: 110, height: 32, paddingLeft: 24, paddingRight: 24, paddingTop: 14, paddingBottom: 14, left: 797, top: 462, position: 'absolute', background: 'black', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
    <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>등록</div>
  </div>
  <div className="Button" style={{width: 110, height: 32, paddingLeft: 24, paddingRight: 24, paddingTop: 14, paddingBottom: 14, left: 668, top: 462, position: 'absolute', background: '#E6E6E6', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
    <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>취소</div>
  </div>
  <div className="Rectangle56" style={{width: 877, height: 51, left: 30, top: 262, position: 'absolute', borderRadius: 10, border: '1px #B1B1B1 solid'}} />
  <div className="Rectangle57" style={{width: 877, height: 132, left: 30, top: 316, position: 'absolute', borderRadius: 10, border: '1px #B1B1B1 solid'}} />
  <div style={{left: 38, top: 273, position: 'absolute', color: '#AEAEAE', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>리뷰 제목 입력</div>
  <div style={{left: 38, top: 329, position: 'absolute', color: '#646464', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>세부 리뷰 내용 입력</div>
  <div className="Rectangle58" style={{width: 221, height: 129, left: 30, top: 100, position: 'absolute', background: '#D9D9D9', borderRadius: 10}} />
  <div style={{left: 107, top: 154, position: 'absolute', color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>사진 추가</div>
</div>
  );
}

export default WriteReviewPage;
