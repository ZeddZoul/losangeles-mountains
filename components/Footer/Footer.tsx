import Image from 'next/image'
import s from './Footer.module.scss'
import footer_logo from "@/public/footer_logo.png"
const Footer = () => {
  return (
    <div className={s.Footer}>
      <Image src={footer_logo} alt="" />
      <h5>COPYRIGHT 2016. ALL RIGHTS RESERVED.</h5>
    </div>
  )
}

export default Footer