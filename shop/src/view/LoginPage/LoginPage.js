import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault(); // 폼의 기본 동작 방지

    // 여기서는 예시로 콘솔에 출력하지만, 실제로는 서버로 데이터를 보내 로그인 처리를 할 수 있습니다.
    console.log('UserID:', userid);
    console.log('Password:', password);

    // 로그인 후에 다음 작업을 수행할 수 있습니다.
    // 예: 로그인 상태를 앱 전역에서 관리하거나, 다른 페이지로 이동 등
  };

  return (
    <div className='login-container'>
      <h1 className='login-header'>로그인</h1>
      <div className="login">
        <form className='id'>
          <label htmlFor='login-id-input' className='login-id'>아이디</label>
          <input 
            id='login-id-input' 
            className='login-id-input' 
            type='text' 
            placeholder='ID를 입력하세요'
            value={userid}
            onChange={(e) => setUserId(e.target.value)}
          />
        </form>
        <form className='pw'>
          <label htmlFor='login-pw-input' className='login-pw'>비밀번호</label>
          <input 
            id='login-pw-input' 
            className='login-pw-input' 
            type='password' 
            placeholder='PW를 입력하세요'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>
      <button type="submit" className="login-btn" onClick={handleLogin}>
        <span className="login-btn-txt">로그인</span>
      </button>
    </div>
  );
}

export default LoginPage;
