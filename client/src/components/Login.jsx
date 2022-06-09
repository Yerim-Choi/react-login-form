import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="wrap">
      <div className="container">
        <div className="header">회원가입</div>
        <form>
          <div className="row">
            <div className="item">
              <label htmlFor="id">
                아이디<span>*</span>
              </label>
              <input name="id" required placeholder="아이디를 입력해주세요." />
            </div>
            <button className="btn-check">중복확인</button>
          </div>
          <button className="btn-join">가입하기</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
