/* eslint-disable radix */
import React, { useRef, useEffect } from 'react';

export default function Slide() {
  const mainSlideRef = useRef();
  const slideControlRef = useRef();
  const slideCount = useRef(0);
  const slideState = useRef(true);
  const intervalRef = useRef();
  const onResize = () => {
    if (mainSlideRef.current) {
      mainSlideRef.current.style.transition = 'none';
      if (window.innerWidth > 1050) {
        for (let i = 0; i < mainSlideRef.current.children.length; i += 1) {
          document.querySelectorAll('.slideImg')[i].style.width = `${
            window.innerWidth
          }px`;
        }
        mainSlideRef.current.style.width = `${mainSlideRef.current.children
          .length * window.innerWidth}px`;
        mainSlideRef.current.style.left = `${-window.innerWidth *
          slideCount.current}px`;
      } else {
        for (let i = 0; i < mainSlideRef.current.children.length; i += 1) {
          document.querySelectorAll('.slideImg')[i].style.width = '1050px';
        }
        mainSlideRef.current.style.width = `${mainSlideRef.current.children
          .length * 1050}px`;
        mainSlideRef.current.style.left = `${-1050 * slideCount.current}px`;
      }
    }
  };
  const slideAnimation = type => {
    if (mainSlideRef.current) {
      mainSlideRef.current.style.transition = 'left 1s';
      switch (type) {
        case 'prev':
          if (mainSlideRef.current.style.left !== '0px') {
            slideCount.current -= 1;
            mainSlideRef.current.style.left = `${parseInt(
              mainSlideRef.current.style.left,
            ) + parseInt(mainSlideRef.current.children[0].style.width)}px`;
          }
          break;
        case 'next':
          if (
            mainSlideRef.current.style.left !==
            `${-(mainSlideRef.current.children.length - 1) *
              parseInt(window.innerWidth)}px`
          ) {
            slideCount.current += 1;
            mainSlideRef.current.style.left = `${parseInt(
              mainSlideRef.current.style.left,
            ) - parseInt(mainSlideRef.current.children[0].style.width)}px`;
          }
          break;
        default:
      }
    }
  };
  const onPrev = () => {
    slideControlRef.current.children[0].removeEventListener('click', onPrev);
    setTimeout(() => {
      slideControlRef.current.children[0].addEventListener('click', onPrev);
    }, 1000);
    slideAnimation('prev');
  };
  const onNext = () => {
    slideControlRef.current.children[1].removeEventListener('click', onNext);
    setTimeout(() => {
      slideControlRef.current.children[1].addEventListener('click', onNext);
    }, 1000);
    slideAnimation('next');
  };
  const onEnter = () => {
    clearInterval(intervalRef.current);
  };
  const onLeave = () => {
    const slideIntV = setInterval(() => {
      if (mainSlideRef.current) {
        if (slideCount.current === mainSlideRef.current.children.length - 1) {
          slideCount.current = 0;
          mainSlideRef.current.style.left = '0px';
        } else if (slideState.current) {
          slideAnimation('next');
        }
      }
    }, 3000);
    intervalRef.current = slideIntV;
  };
  useEffect(() => {
    onResize();
    const slideIntV = setInterval(() => {
      if (mainSlideRef.current) {
        if (slideCount.current === mainSlideRef.current.children.length - 1) {
          slideCount.current = 0;
          mainSlideRef.current.style.left = '0px';
        } else if (slideState.current) {
          slideAnimation('next');
        }
      }
    }, 3000);
    intervalRef.current = slideIntV;
    window.addEventListener('resize', onResize);
    if (mainSlideRef.current) {
      mainSlideRef.current.style.left = 0;
    }
    if (slideControlRef.current) {
      slideControlRef.current.addEventListener('mouseenter', onEnter);
      slideControlRef.current.addEventListener('mouseleave', onLeave);
      slideControlRef.current.children[0].addEventListener('click', onPrev);
      slideControlRef.current.children[1].addEventListener('click', onNext);
    }
    return () => {
      clearInterval(slideIntV);
      window.removeEventListener('resize', onResize);
      slideControlRef.current.removeEventListener('mouseenter', onEnter);
      slideControlRef.current.removeEventListener('mouseleave', onLeave);
      slideControlRef.current.children[0].removeEventListener('click', onPrev);
      slideControlRef.current.children[1].removeEventListener('click', onNext);
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
    </>
  );
}
