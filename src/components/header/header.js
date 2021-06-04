import React, { useState } from "react";
import s from "./header.module.css";
import Menu from "../menu/menu";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <div className={s.burgerMenuContainer}>
        <nav>
          <div
            className={s.burgerBtn}
            onClick={() => setMenuActive(!menuActive)}
          >
            <span />
          </div>
        </nav>
        <Menu active={menuActive} setActive={setMenuActive} />
      </div>
      <div id="header" className={s.headerMenu}>
        <ul className={s.menuList}>
          <li className={s.menuItem}>
            <a className={s.menuLink} href="#header">
              Home
            </a>
          </li>
          <li className={s.menuItem}>
            <a className={s.menuLink} href="#slider">
              Slider
            </a>
          </li>
          <li className={s.menuItem}>
            <a className={s.menuLink} href="#contacts">
              Contacts
            </a>
          </li>
          <li className={s.menuItem}>
            <a className={s.menuLink} href="#footer">
              Footer
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
