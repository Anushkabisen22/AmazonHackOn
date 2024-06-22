import React, { useState } from "react";
import Slider from "react-slick";
import B1 from "../../assets/assets/banner/bannerImgOne.jpg";
import B2 from "../../assets/assets/banner/bannerImgTwo.jpg";
import B3 from "../../assets/assets/banner/bannerImgThree.jpg";
import B4 from "../../assets/assets/banner/bannerImgFour.jpg";
import B5 from "../../assets/assets/banner/bannerImgFive.jpg";
const Banner = () => {
  const [dotActive, setDocActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "45%",
          transform: "translate(-50% -50%)",
          width: "210px",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          background: "#131921",
          padding: "8px 0",
          cursor: "pointer",
          border: "1px solid #f3a847",
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="w-full">
      <div className="w-full h-full relative">
        <Slider {...settings}>
          <div>
            <img src={B1} />
          </div>
          <div>
            <img src={B2} />
          </div>
          <div>
            <img src={B3} />
          </div>
          <div>
            <img src={B4} />
          </div>
          <div>
            <img src={B5} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
