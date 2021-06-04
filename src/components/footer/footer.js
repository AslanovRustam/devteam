import s from "./footer.module.css";

export default function Header() {
  return (
    <footer className={s.footerMenu}>
      <div>
        <h2 className={s.footerTitle}>
          ©2021 Some company. All rights reserved.
        </h2>
      </div>
    </footer>
  );
}
