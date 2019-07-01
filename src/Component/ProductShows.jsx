import React, { useRef } from 'react';

function ProductShow({ src, title, price, prevPrice, tag }) {
  const productShowCoverRef = useRef();
  const onEnter = () => {
    if (productShowCoverRef.current) {
      productShowCoverRef.current.style.transform = 'translateY(0%)';
    }
  };
  const onLeave = () => {
    if (productShowCoverRef.current) {
      productShowCoverRef.current.style.transform = 'translateY(-40px)';
    }
  };
  return (
    <div className="productShowWrap">
      <div
        className="productShowImg"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="productShowImgCover" ref={productShowCoverRef}>
          <p
            className="productShowSale"
            style={prevPrice ? {} : { fontSize: '18px' }}
          >
            <span className="strong">
              {prevPrice &&
                `${Math.floor(
                  ((parseInt(prevPrice) - parseInt(price)) /
                    parseInt(prevPrice)) *
                    100,
                )}%`}
            </span>

            {prevPrice ? ` 세일 합니다!` : '다음 할인을 기대해주세요!'}
          </p>
        </div>
      </div>
      <div className="productShowDetails">
        <p className="productShowTitle">{title}</p>
        <p className="productShowPrice">{price}</p>
        <p className="productShowPrevPrice">{prevPrice || price}</p>
        <span className="productShowTag">{tag}</span>
        {prevPrice && <span className="productShowTag">세일💸</span>}
      </div>
    </div>
  );
}

export default function ProductShows() {
  return (
    <>
      <p className="productShowsTitle">이상품 어때요?</p>
      <div className="productShowsWrap">
        <ProductShow
          src="./image/productShow1.jpg"
          title="[만원의행복] 와인안주 세트"
          price="10000원"
          prevPrice="14300원"
          tag="만원의행복"
        />
        <ProductShow
          src="./image/productShow2.jpg"
          title="[만원의행복] 맥주안주 세트"
          price="10000원"
          prevPrice="14300원"
          tag="만원의행복"
        />
        <ProductShow
          src="./image/productShow3.jpg"
          title="[정미경키친] 토마토 해초샐러드"
          price="10000원"
          tag="정미경키친"
        />
        <ProductShow
          src="./image/productShow4.jpg"
          title="[창화당]만두우"
          price="15000원"
          prevPrice="23300원"
          tag="창화당"
        />
      </div>
    </>
  );
}
