import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

function LoginPage() {
  const navigate = useNavigate();
  const [id, setUserId] = useState('');
  const [pw, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = {
      id,
      pw
    };

    try {
      const isHost = await api.post('/user/is-host', formData);
      if (isHost.data[0].result === 'true') {
        console.log('주인 로그인: ', isHost.data);
        navigate('/register-camping');
      }
      else {
        const response = await api.post('/user/login', formData);
        if (response.data[0].result === 'true') {
          console.log('로그인 성공:', response.data);
          navigate('/main');
        }
        else {
          console.log('로그인 실패:', response.data);
        }
      }
    } catch (error) {
      // 네트워크 오류 등으로 인한 로그인 실패
      console.error('로그인 실패:', error.message);
      // 에러 메시지를 사용자에게 표시하거나 다른 처리를 수행할 수 있습니다.
    }
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
            value={id}
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
            value={pw}
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
