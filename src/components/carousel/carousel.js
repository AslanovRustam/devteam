import React from "react";
import s from "./carousel.module.css";
import Tech from "../../images/tech.jpg";
import Proc from "../../images/proc.jpg";
import Computer from "../../images/computer.jpg";
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
            <img className={s.sliderImg} src={Tech} alt="Tech"></img>
          </div>
          <div className={s.sliderItemContainer} style={{ display: "flex" }}>
            <img className={s.sliderImg} src={Proc} alt="Proc"></img>
          </div>
          <div className={s.sliderItemContainer} style={{ display: "flex" }}>
            <img className={s.sliderImg} src={Computer} alt="Computer"></img>
          </div>
        </Slider>
      </div>
      <div className={s.WOsliderContainer}>
        <div className={s.sliderItemContainer} style={{ display: "flex" }}>
          <img className={s.sliderImg} src={Tech} alt="Tech"></img>
        </div>
        <div className={s.sliderItemContainer} style={{ display: "flex" }}>
          <img className={s.sliderImg} src={Proc} alt="Proc"></img>
        </div>
        <div className={s.sliderItemContainer} style={{ display: "flex" }}>
          <img className={s.sliderImg} src={Computer} alt="Computer"></img>
        </div>
      </div>
    </>
  );
}
