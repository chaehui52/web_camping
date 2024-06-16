import logo from './logo.svg';
import './App.css';
function LoginPage() {
  return (
    <div style={{width: 960, height: 540, position: 'relative', background: 'white'}}>
    <div style={{left: 30, top: 31, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>로그인</div>
    <div style={{left: 273, top: 235, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>아이디</div>
    <div style={{left: 267, top: 289, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>비밀번호</div>
    <div className="Rectangle1" style={{width: 209, height: 27, left: 332, top: 283, position: 'absolute', background: 'white', border: '1px black solid'}} />
    <div className="Rectangle13" style={{width: 209, height: 27, left: 332, top: 229, position: 'absolute', background: 'white', border: '1px black solid'}} />
    <div className="Button" style={{width: 110, height: 32, paddingLeft: 24, paddingRight: 24, paddingTop: 14, paddingBottom: 14, left: 577, top: 250, position: 'absolute', background: 'black', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
      <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>로그인</div>
    </div>
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
  </div>
  );
}

export default LoginPage;
