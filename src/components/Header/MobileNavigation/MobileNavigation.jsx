import NavLinks from "../NavLinks/NavLinks"
import s from './MobileNavigation.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"

const MobileNavigation = () => {

  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  const closeMobileMenu = () => {
    setOpen(!open)
  }
  const humbyrgerIcon = <GiHamburgerMenu className={s.icon} onClick={toggle} />
  const closeIcon = <AiOutlineClose className={s.icon} onClick={toggle} />
  return (
    <nav className={s.MobileNavigation}>
      {open && <NavLinks closeMobileMenu={closeMobileMenu}/>}
      {open ? closeIcon : humbyrgerIcon}
    </nav>
  )
}
export default MobileNavigation