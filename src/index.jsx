import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Component/Header';
import Main from './Component/Main';

function useClose() {
  document.querySelector('#topPopUp').style.opacity = 0;
  document.querySelector('#topPopUp').style.transform = 'translateX(-100%)';
  setTimeout(() => {
    document.querySelector('#topPopUp').style.display = 'none';
  }, 800);
}

function App() {
  return (
    <>
      <div id="topPopUp">
        <div id="topPopWrap">
          지금 가입하고 인기 상품 100원에 받아가세요!
          <div id="topPopCls" onClick={useClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                fill="white"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
        </div>
      </div>
      <Header />
      <Main />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
