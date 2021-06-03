import React, { useState, useEffect } from "react";
import s from "./header.module.css";
import Menu from "../menu/menu";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div>
      <nav>
        <div className={s.burgerBtn} onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
      </nav>
      <Menu active={menuActive} setActive={setMenuActive} />
    </div>
  );
}
