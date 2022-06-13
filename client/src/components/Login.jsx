import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="wrap">
      <div className="container">
        <div className="header">회원가입</div>
        <form className="login-form">
          {/* id */}
          <div className="row">
            <div className="item">
              <label htmlFor="id">
                아이디<span>*</span>
              </label>
              <input name="id" required placeholder="아이디를 입력해주세요." />
              <p className="error-msg  msg-id">3-15자의 영문/숫자 조합</p>
            </div>
            <button className="btn-check">중복확인</button>
          </div>
          {/* pw */}
          <div className="row">
            <div className="item">
              <label htmlFor="pw">
                비밀번호<span>*</span>
              </label>
              <input
                name="pw"
                required
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
              {/* <p className="error-msg  msg-pw">8-16자의 영문/숫자 조합</p> */}
              <p className="error-msg good">사용하실 수 있습니다.</p>
            </div>
          </div>
          <div className="row">
            <div className="item">
              <label htmlFor="pw">
                비밀번호 확인<span>*</span>
              </label>
              <input
                className="pw-check"
                name="pw-check"
                required
                type="password"
                placeholder="비밀번호를 한번 더 입력해주세요."
              />
              <p className="error-msg check-msg-pw error">일치하지 않습니다.</p>
            </div>
          </div>
          {/* name */}
          <div className="row">
            <div className="item">
              <label htmlFor="name">
                이름<span>*</span>
              </label>
              <input name="name" required placeholder="이름을 입력해주세요." />
              <p className="error-msg check-msg-name">
                한글 15자, 영문 30자까지 입력
              </p>
            </div>
          </div>
          {/* email */}
          <div className="row">
            <div className="item">
              <label htmlFor="email">
                이메일<span>*</span>
              </label>
              <input
                name="email"
                required
                placeholder="이메일 주소를 입력해주세요."
              />
              <p className="error-msg check-msg-email error">
                잘못된 이메일 형식입니다.
              </p>
            </div>
          </div>
          {/* phone */}
          <div className="row">
            <div className="item">
              <label htmlFor="phone">
                휴대폰 번호
                <span>*</span>
              </label>
              <input
                name="phone"
                required
                placeholder="휴대폰 번호를 입력해주세요."
              />
            </div>
          </div>
          {/* id */}
          <div className="row">
            <div className="item">
              <label htmlFor="address">
                주소<span>*</span>
              </label>
              <input
                name="address"
                required
                placeholder="주소를 입력해주세요."
              />
            </div>
            <button className="btn-check">주소 검색</button>
          </div>
          {/* 가입하기 버튼 */}
          <button className="btn-join">가입하기</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
