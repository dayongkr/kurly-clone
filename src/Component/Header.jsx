import React, { useEffect, useRef } from 'react';

export default function Header() {
  const headerRef = useRef();
  const onScroll = () => {
    if (headerRef.current) {
      if (document.querySelector('#topPopUp').style.display === 'none') {
        if (window.scrollY >= 142 - 42) {
          headerRef.current.style.position = 'fixed';
          headerRef.current.style.top = 0;
        } else {
          headerRef.current.style.position = 'static';
        }
      } else if (window.scrollY >= 142) {
        headerRef.current.style.position = 'fixed';
        headerRef.current.style.top = 0;
      } else {
        headerRef.current.style.position = 'static';
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <header>
      <div id="headerTop">
        <div id="headerDeli" />
        <ul id="userMenu">
          <li className="userItem strong">회원가입</li>
          <li className="userItem">로그인</li>
          <li className="userItem">고객센터</li>
          <li className="userItem">배송지역 검색</li>
        </ul>
      </div>
      <div id="headerCen">
        <img id="logoImg" src="./image/logo.png" alt="로고이미지" />
      </div>
      <div id="headerBott" ref={headerRef}>
        <div id="headerBottWrap">
          <ul id="mainMenu">
            <li className="strong">
              <img src="./image/menuIcon.png" alt="" />
              전체 카테고리
            </li>
            <li>신상품</li>
            <li>베스트</li>
            <li>알뜰쇼핑</li>
            <li>이벤트</li>
          </ul>
          <div id="searchWrap">
            <input id="search" type="text" placeholder="입력해주세요~~" />
            <img src="./image/searchIcon@2x.png" alt="검색아이콘" />
          </div>
          <img
            src="./image/shoppingCartIcon@2x.png"
            width="30px"
            alt="쇼핑카트아이콘"
            id="shoppingCartImg"
          />
        </div>
      </div>
    </header>
  );
}
