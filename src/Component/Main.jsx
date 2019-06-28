import React, { useRef, useEffect } from 'react';

export default function Main() {
  const mainSlideRef = useRef();
  const slideControlRef = useRef();
  const onResize = () => {
    if (mainSlideRef.current) {
      if (window.innerWidth > 1050) {
        for (let i = 0; i < mainSlideRef.current.children.length; i += 1) {
          document.querySelectorAll('.slideImg')[i].style.width = `${
            window.innerWidth
          }px`;
        }
        mainSlideRef.current.style.width = `${mainSlideRef.current.children
          .length * window.innerWidth}px`;
      } else {
        for (let i = 0; i < mainSlideRef.current.children.length; i += 1) {
          document.querySelectorAll('.slideImg')[i].style.width = '1050px';
        }
        mainSlideRef.current.style.width = `${mainSlideRef.current.children
          .length * 1050}px`;
      }
    }
  };
  const onPrev = () => {
    if (mainSlideRef.current) {
      mainSlideRef.current.style.left = `${parseInt(
        mainSlideRef.current.style.left,
      ) + parseInt(mainSlideRef.current.children[0].style.width)}px`;
    }
  };
  const onNext = () => {
    if (mainSlideRef.current) {
      mainSlideRef.current.style.left = `${parseInt(
        mainSlideRef.current.style.left,
      ) - parseInt(mainSlideRef.current.children[0].style.width)}px`;
    }
  };
  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    if (slideControlRef.current) {
      mainSlideRef.current.style.left = 0;
      slideControlRef.current.children[0].addEventListener('click', onPrev);
      slideControlRef.current.children[1].addEventListener('click', onNext);
    }
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return (
    <>
      <div id="mainSlideWrap">
        <div id="mainSlide" ref={mainSlideRef}>
          <div
            className="slideImg"
            style={{ backgroundImage: 'url(./image/slide1.jpg)' }}
          />
          <div
            className="slideImg"
            style={{ backgroundImage: 'url(./image/slide2.jpg)' }}
          />
          <div
            className="slideImg"
            style={{ backgroundImage: 'url(./image/slide3.jpg)' }}
          />
          <div
            className="slideImg"
            style={{ backgroundImage: 'url(./image/slide4.jpg)' }}
          />
        </div>
        <div id="slideControl" ref={slideControlRef}>
          <img src="./image/ico_prev1_x2_v2.png" alt="슬라이드 왼쪽으로" />
          <img src="./image/ico_next1_x2_v2.png" alt="슬라이드 오른쪽으로" />
        </div>
      </div>
      <div>hello</div>
    </>
  );
}
