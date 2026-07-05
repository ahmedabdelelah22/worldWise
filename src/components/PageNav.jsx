import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <line x1="3" y1="6"  x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <line x1="18" y1="6"  x2="6"  y2="18" />
      <line x1="6"  y1="6"  x2="18" y2="18" />
    </svg>
  );
}

function PageNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className={styles.nav}>
      <Logo />

      {/* Hamburger — visible only on mobile via CSS */}
      <button
        className={styles.menuBtn}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <IconClose /> : <IconMenu />}
      </button>

      <ul className={open ? styles.open : ""}>
        <li>
          <NavLink to="/pricing" onClick={close}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product" onClick={close}>Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink} onClick={close}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;