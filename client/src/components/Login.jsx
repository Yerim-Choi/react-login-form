import React, { useCallback } from "react";
import { useState } from "react";
import "./Login.css";
import classnames from "classnames";
import PopupDom from "./PopupDom";
import PopupDaumPostCode from "./PopupDaumPostCode";

function Login() {
  const [id, setId] = useState("");
  const [msgId, setMsgId] = useState("3-15자의 영문/숫자 조합");
  const [isId, setIsId] = useState(false);

  const [pw, setPw] = useState("");
  const [msgPw, setMsgPw] = useState("8-16자의 영문/숫자 조합");
  const [isPw, setIsPw] = useState(false);

  const [pwCheck, setPwCheck] = useState("");
  const [msgCheckPw, setMsgCheckPw] = useState("");
  const [isPwCheck, setIsPwCheck] = useState(false);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);

  const [phone, setPhone] = useState("");

  // 팝업창 상태 관리
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAdderss] = useState("");

  // 팝업창 열기
  const openPostCode = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsOpen(false);
  };

  // 아이디
  const onChangeId = useCallback((e) => {
    const regExp = /^[a-z0-9]{3,15}$/;
    setId(e.target.value);

    if (e.target.value.length < 3 || e.target.value.length > 15) {
      // 길이 체크
      setMsgId("사용하실 수 없는 아이디입니다.");
      setIsId(false);
    } else if (!regExp.test(e.target.value)) {
      // 영문 또는 숫자
      setMsgId("영문 또는 숫자만 입려해주세요.");
      setIsId(false);
    } else if (e.target.value.match(/\s/g)) {
      // 공백 체크
      setMsgId("공백없이 입력해주세요.");
      setIsId(false);
      // setId(e.target.value.replace(/\s/g, "")); // 공백 자동 제거
    } else {
      setMsgId("사용하실 수 있습니다.");
      setIsId(true);
    }
  }, []);

  // 비밀번호
  const onChangePw = useCallback((e) => {
    const regExp = /^[a-z0-9]{8,16}$/;
    setPw(e.target.value);

    if (e.target.value.length < 8 || e.target.value.length > 16) {
      // 길이 체크
      setMsgPw("사용하실 수 없는 비밀번호입니다.");
      setIsPw(false);
    } else if (!regExp.test(e.target.value)) {
      // 영문 또는 숫자
      setMsgPw("영문 또는 숫자만 입려해주세요.");
      setIsPw(false);
    } else if (e.target.value.match(/\s/g)) {
      // 공백 체크
      setMsgPw("공백없이 입력해주세요.");
      setIsPw(false);
    } else {
      setMsgPw("사용하실 수 있습니다.");
      setIsPw(true);
    }
  }, []);

  // 비밀번호 확인
  const onChangePwCheck = (e) => {
    setPwCheck(e.target.value);
    if (pw !== e.target.value) {
      // 공백 체크
      setMsgCheckPw("비밀번호가 일치하지 않습니다.");
      setIsPwCheck(false);
    } else {
      setMsgCheckPw("사용하실 수 있습니다");
      setIsPwCheck(true);
    }
  };

  // 이름
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  // 이메일
  const onChangeEmail = (e) => {
    // eslint-disable-next-line
    const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setEmail(e.target.value);
    if (!emailExp.test(e.target.value)) {
      setMsgEmail("잘못된 이메일 형식 입니다.");
      setIsEmail(false);
    } else {
      setMsgEmail("사용하실 수 있습니다.");
      setIsEmail(true);
    }
  };

  // 휴대폰 번호
  const onChangePhone = (e) => {
    const numberExp = /[^0-9]/gi;
    setPhone(
      e.target.value
        .replace(numberExp, "")
        .replace(
          /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
          "$1-$2-$3"
        )
        .replace("--", "-")
    );
  };

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
              <input
                className={id && (isId ? "" : "error")}
                name="id"
                required
                placeholder="아이디를 입력해주세요."
                value={id}
                onChange={onChangeId}
                maxLength="15"
              />
              <p
                className={classnames(
                  "error-msg",
                  "msg-id",
                  id && (isId ? "good" : "error")
                )}
              >
                {msgId}
              </p>
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
                className={pw && (isPw ? "" : "error")}
                name="pw"
                required
                type="password"
                placeholder="비밀번호를 입력해주세요."
                value={pw}
                onChange={onChangePw}
                maxLength="16"
              />

              <p
                className={classnames(
                  "error-msg",
                  "msg-id",
                  pw && (isPw ? "good" : "error")
                )}
              >
                {msgPw}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="item">
              <label htmlFor="pw">
                비밀번호 확인<span>*</span>
              </label>
              <input
                className={classnames(
                  "pw-check",
                  pwCheck && (isPwCheck ? "" : "error")
                )}
                name="pw-check"
                required
                type="password"
                placeholder="비밀번호를 한번 더 입력해주세요."
                value={pwCheck}
                onChange={onChangePwCheck}
                maxLength="16"
              />
              <p
                className={classnames(
                  "error-msg",
                  "msg-id",
                  pwCheck && (isPwCheck ? "good" : "error")
                )}
              >
                {msgCheckPw}
              </p>
            </div>
          </div>
          {/* name */}
          <div className="row">
            <div className="item">
              <label htmlFor="name">
                이름<span>*</span>
              </label>
              <input
                name="name"
                required
                placeholder="이름을 입력해주세요."
                value={name}
                onChange={onChangeName}
              />
              {/* <p className="error-msg check-msg-name">
                한글 15자, 영문 30자까지 입력
              </p> */}
            </div>
          </div>
          {/* email */}
          <div className="row">
            <div className="item">
              <label htmlFor="email">
                이메일<span>*</span>
              </label>
              <input
                className={email && (isEmail ? "" : "error")}
                name="email"
                required
                placeholder="이메일 주소를 입력해주세요."
                value={email}
                onChange={onChangeEmail}
              />
              <p
                className={classnames(
                  "error-msg",
                  "msg-email",
                  email && (isEmail ? "good" : "error")
                )}
              >
                {msgEmail}
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
                value={phone}
                onChange={onChangePhone}
                maxLength="13"
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
                value={address}
              />
            </div>
            <button className="btn-check" onClick={openPostCode}>
              주소 검색
            </button>
            {/* 팝업 */}
            <div id="popup-daum-postcode">
              {isOpen && (
                <PopupDom>
                  <PopupDaumPostCode
                    address={address}
                    setAdderss={setAdderss}
                    onClose={closePostCode}
                  />
                </PopupDom>
              )}
            </div>
          </div>
          {/* 가입하기 버튼 */}
          <button className="btn-join">가입하기</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
