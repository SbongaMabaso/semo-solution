import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      <Link href="/">S e m o | S o l u t i o n</Link>
      <ul className={style.list}>
        <li className={style.listItem}>
        {/* /products/design  - should replace a (/) in a link*/}
          <Link href="/">DESIGN</Link>
        </li>
        <li className={style.listItem}>
        {/* /products/development */}
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={style.listItem}>
          {/* /products/production */}
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={style.listItem}>
          {/* /products/photography */}
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={style.menuItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
