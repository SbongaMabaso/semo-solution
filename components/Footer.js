import style from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}>SEMO SOLUTION.</h1>
        <h1 className={style.linkTitle}>
          <Link href="/contact" className={style.link} passHref>
            <>
              <span className={style.linkText}>WORK WITH US</span>
              <Image
                src={process.env.NEXT_PUBLIC_URL + "/img/link.png"}
                width="40px"
                height="40px"
                alt=""
              />
            </>
          </Link>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          K123 Princess Mago st,
          <br /> South Africa
        </div>
        <div className={style.cardItem}>
          info@semo.com
          <br /> 035 698 5452
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          FOLLOW US ON SOCIALS:
          <br /> @SEMO_SOLUTION
        </div>
        <div className={style.cardItem}>
          © 2022 SEMO Developer,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
