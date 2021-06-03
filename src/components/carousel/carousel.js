import React from "react";
import s from "./carousel.module.css";
import Nature from "../../images/nature.jpg";
import Summer from "../../images/summer.jpg";
import SummerNext from "../../images/summernext.jpg";
import Slider from "react-slick";

export default function Carousel() {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className={s.sliderContainer}>
        <Slider {...settings}>
          <div className={s.sliderItemContainer} style={{ display: "flex" }}>
            <img className={s.sliderImg} src={Nature} alt="Winter"></img>
          </div>
          <div className={s.sliderItemContainer} style={{ display: "flex" }}>
            <img className={s.sliderImg} src={Summer} alt="Summer"></img>
          </div>
          <div className={s.sliderItemContainer} style={{ display: "flex" }}>
            <img className={s.sliderImg} src={SummerNext} alt="Spring"></img>
          </div>
        </Slider>
      </div>
      <div className={s.WOsliderContainer}>
        <div className={s.sliderItemContainer} style={{ display: "flex" }}>
          <img className={s.sliderImg} src={Nature} alt="Winter"></img>
        </div>
        <div className={s.sliderItemContainer} style={{ display: "flex" }}>
          <img className={s.sliderImg} src={Summer} alt="Summer"></img>
        </div>
        <div className={s.sliderItemContainer} style={{ display: "flex" }}>
          <img className={s.sliderImg} src={SummerNext} alt="Spring"></img>
        </div>
      </div>
    </>
  );
}
