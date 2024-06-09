import logo from './logo.svg';
import './App.css';

function MainPage() {
  return (
    <div style={{width: 960, height: 540, position: 'relative', background: 'white'}}>
  <div style={{left: 30, top: 31, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>메인페이지 </div>
  <div style={{left: 271, top: 170, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>캠핑장 이름</div>
  <div className="Rectangle17" style={{width: 155, height: 19, left: 359, top: 170, position: 'absolute', background: 'white', border: '1px black solid'}} />
  <div style={{left: 271, top: 212, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>캠핑장 주소</div>
  <div className="Rectangle14" style={{width: 140, height: 18, left: 359, top: 212, position: 'absolute', background: 'white', border: '1px black solid'}} />
  <div className="Rectangle15" style={{width: 140, height: 18, left: 521, top: 212, position: 'absolute', background: 'white', border: '1px black solid'}} />
  <div style={{left: 368, top: 212, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>시/도</div>
  <div style={{left: 530, top: 212, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>시/군/구</div>
  <div style={{width: 960, height: 540, left: -328, top: 796, position: 'absolute', background: 'white'}}>
    <div style={{left: 30, top: 31, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>로그인</div>
    <div style={{left: 273, top: 235, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>아이디</div>
    <div style={{left: 267, top: 289, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>비밀번호</div>
    <div className="Rectangle1" style={{width: 209, height: 27, left: 332, top: 283, position: 'absolute', background: 'white', border: '1px black solid'}} />
    <div className="Rectangle13" style={{width: 209, height: 27, left: 332, top: 229, position: 'absolute', background: 'white', border: '1px black solid'}} />
    <div className="Button" style={{width: 110, height: 32, paddingLeft: 24, paddingRight: 24, paddingTop: 14, paddingBottom: 14, left: 577, top: 250, position: 'absolute', background: 'black', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
      <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>로그인</div>
    </div>
  </div>
  <div style={{left: 388, top: 304, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>캠핑장</div>
  <div className="Rectangle21" style={{width: 16, height: 15, left: 359, top: 304, position: 'absolute', background: 'white', border: '1px black solid'}} />
  <div style={{left: 479, top: 304, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>글램핑</div>
  <div className="Rectangle18" style={{width: 16, height: 15, left: 450, top: 304, position: 'absolute', background: 'white', border: '1px black solid'}} />
  <div style={{left: 570, top: 304, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>카라반</div>
  <div className="Rectangle19" style={{width: 16, height: 15, left: 541, top: 304, position: 'absolute', background: 'white', border: '1px black solid'}} />
  <div style={{left: 661, top: 304, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>펜션</div>
  <div className="Rectangle20" style={{width: 16, height: 15, left: 632, top: 304, position: 'absolute', background: 'white', border: '1px black solid'}} />
  <div style={{left: 271, top: 254, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>입실 시간</div>
  <div style={{left: 271, top: 304, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>부대 시설</div>
  <div style={{left: 488, top: 253, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>~</div>
  <div className="Rectangle30" style={{width: 120, height: 19, left: 359, top: 253, position: 'absolute', background: 'white', border: '1px black solid'}} />
  <div className="Rectangle31" style={{width: 120, height: 19, left: 508, top: 253, position: 'absolute', background: 'white', border: '1px black solid'}} />
  <div className="Button" style={{width: 110, height: 32, paddingLeft: 24, paddingRight: 24, paddingTop: 14, paddingBottom: 14, left: 425, top: 421, position: 'absolute', background: 'black', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
    <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>검색</div>
  </div>
</div>
  );
}

export default MainPage;
