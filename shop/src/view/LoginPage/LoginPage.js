import './LoginPage.css'

function LoginPage() {
  return (
    <div className='login-container'>
      <h1>로그인</h1>
      <div className="login">
        <form className='id'>
          <label className='login-id'>아이디</label>
          <input className='login-id-input' type='text' placeholder='ID를 입력하세요'/>
        </form>
        <form className='pw'>
          <label className='login-pw'>비밀번호</label>
          <input className='login-pw-input' type='text' placeholder='PW를 입력하세요'/>
        </form>
      </div>
      <button type="submit" class="login-btn">
        <span class="login-btn-txt">로그인</span>
      </button>
    </div>
  );
}

export default LoginPage;
