import s from "./menu.module.css";

export default function Menu({ active, setActive }) {
  return (
    <div
      className={active ? s.menuActive : s.menu}
      onClick={() => setActive(false)}
    >
      <div className={s.blur}>
        <div className={s.menuContent} onClick={(e) => e.stopPropagation()}>
          <div className={s.menuHeader}>Menu</div>
          <ul className={s.menuList}>
            <li className={s.menuItem}>
              <a
                className={s.menuLink}
                href="#header"
                onClick={() => setActive(false)}
              >
                Home
              </a>
            </li>
            <li className={s.menuItem}>
              <a
                className={s.menuLink}
                href="#slider"
                onClick={() => setActive(false)}
              >
                Slider
              </a>
            </li>
            <li className={s.menuItem}>
              <a
                className={s.menuLink}
                href="#contacts"
                onClick={() => setActive(false)}
              >
                Contacts
              </a>
            </li>
            <li className={s.menuItem}>
              <a
                className={s.menuLink}
                href="#footer"
                onClick={() => setActive(false)}
              >
                Footer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
