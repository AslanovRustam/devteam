import s from "./main.module.css";
import Cat from "../../images/cat.jpg";
import Cat1 from "../../images/cat2.jpg";
import Cat2 from "../../images/cat3.jpg";
import Cat3 from "../../images/cat4.jpg";
import Cat4 from "../../images/cat5.jpg";
import Cat5 from "../../images/cat6.png";
import Cat6 from "../../images/cat7.jpg";

export default function Main() {
  return (
    <div className={s.mainContainer}>
      <div className={s.itemContainer}>
        <h2 className={s.itemTitle}></h2>
        <img className={s.itemImg} src={Cat}></img>
      </div>
      <div className={s.itemContainer}>
        <h2 className={s.itemTitle}></h2>
        <img className={s.itemImg} src={Cat1}></img>
      </div>
      <div className={s.itemContainer}>
        <h2 className={s.itemTitle}></h2>
        <img className={s.itemImg} src={Cat2}></img>
      </div>
      <div className={s.itemContainer}>
        <h2 className={s.itemTitle}></h2>
        <img className={s.itemImg} src={Cat3}></img>
      </div>
      <div className={s.itemContainer}>
        <h2 className={s.itemTitle}></h2>
        <img className={s.itemImg} src={Cat4}></img>
      </div>
      <div className={s.itemContainer}>
        <h2 className={s.itemTitle}></h2>
        <img className={s.itemImg} src={Cat5}></img>
      </div>
    </div>
  );
}
