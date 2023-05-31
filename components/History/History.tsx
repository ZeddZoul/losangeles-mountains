import s from "./History.module.scss";
import Image from "next/image";
import peak from "@/public/history_gallery.png";
import hiker from "@/public/hiker.png";
const History = () => {
  return (
    <section className={s.History}>
      <div>
        <h2>
          <span>01.</span> History
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
          molestias doloribus ducimus omnis amet eaque accusamus, quia harum
          nulla atque voluptatum sunt, temporibus, ipsum nostrum aliquam
          repudiandae nam hic consectetur ad fugit odit aliquid vitae eius
          sapiente. Impedit qui, magnam molestias atque corporis veritatis
          repellendus dolor placeat suscipit esse nulla!
        </p>
      </div>
      <div className={s.Gallery}>
        <div>
          <Image src={hiker} alt="" />
          <Image src={peak} alt="" />
          <Image src={hiker} alt="" />
          <Image src={peak} alt="" />
        </div>
        <span>
          <p></p>
          <p></p>
          <p></p>
        </span>
      </div>
    </section>
  );
};

export default History;
