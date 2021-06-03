import s from "./menu.module.css";

export default function Menu({ active, setActive }) {
  return (
    <div
      className={active ? s.menuActive : s.menu}
      onClick={() => setActive(false)}
    >
      <div className={s.blur}>
        <div className={s.menuContent} onClick={(e) => e.stopPropagation()}>
          <div className={s.menuHeader}>Burger menu</div>
          <ul className={s.menuList}>
            <li className={s.menuItem}>
              <a className={s.menuLink} href="">
                Home
              </a>
            </li>
            <li className={s.menuItem}>
              <a className={s.menuLink} href="">
                Slider
              </a>
            </li>
            <li className={s.menuItem}>
              <a className={s.menuLink} href="">
                Footer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
