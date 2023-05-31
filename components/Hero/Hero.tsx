import s from "./Hero.module.scss"
import Image from 'next/image'
import logo from "@/public/Logo.png"
import stickynav_logo from "@/public/stickynav_logo.png"
import Link from 'next/link'
import Hero_image from "@/public/heroo.png"
const Hero = () => {
  return (
    <>
    <section className={s.Hero}>
      <div className={s.Header} >
        <Image src={logo} alt="" />
        <nav>
          <Link href={"#History"}>1.History</Link>
          <Link href={"#Team"}>2.Team</Link>
        </nav>
      </div>
      <div className={s.Banner}>
          <Image priority src={Hero_image} alt="" />
          
        </div>
        
    </section>
    </>
  )
}
export default Hero
export function StickyNav() {
  return <header className={s.StickyNav}>
    <Image src={stickynav_logo} alt="" />
    <nav>
      <Link href={"#History"}>1.History</Link>
      <Link href={"#Team"}>2.Team</Link>
    </nav>
  </header>
}

