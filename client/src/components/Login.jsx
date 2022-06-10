import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="wrap">
      <div className="container">
        <div className="header">회원가입</div>
        <form>
          {/* id */}
          <div className="row">
            <div className="item">
              <label htmlFor="id">
                아이디<span>*</span>
              </label>
              <input name="id" required placeholder="아이디를 입력해주세요." />
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
              <input
                className="pw-check"
                name="pw-check"
                required
                type="password"
                placeholder="비밀번호를 한번 더 입력해주세요."
              />
            </div>
          </div>
          {/* name */}
          <div className="row">
            <div className="item">
              <label htmlFor="name">
                이름<span>*</span>
              </label>
              <input name="name" required placeholder="이름을 입력해주세요." />
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
