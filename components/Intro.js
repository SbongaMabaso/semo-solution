import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={style.container}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      <Circle backgroundColor="lightblue" top="-15vh" left="-15vh" />
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>| SEM0 S0LUTI0N |</span>
          <br />
           <h6>we are a solution of
             your digital product.
            </h6>
        </h1>
        <p className={style.desc}>
          We are a family of young, and energetic software engineers who
          live and breath coding. Looking for digital product?
           - w e - g o t - y o u ! go to our contact page
          and talk to us today. You are exact where you need to be.
        </p>
        <button className={style.button}>Read More</button>
      </div>
      <div className={style.card}>
        <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/semo-logo.png"} width="850" height="500"
          // layout="fill"
          // objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
