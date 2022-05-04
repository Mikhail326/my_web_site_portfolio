import s from './NavLinks.module.css'
import { motion } from 'framer-motion'
const NavLinks = ({ closeMobileMenu }) => {

  const closeMenu = () => {
    closeMobileMenu()
  }
  const animateForm = { opacity: 0, y: -40 }
  const animateTo = { opacity: 1, y: 0 }

  return (
    <ul className={s.list}>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        onClick={closeMenu}
        className={s.listItem}>
        <a href='#portfolio'>Portfolio</a>
      </motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        onClick={closeMenu}
        className={s.listItem}>
        <a href='#aboutMe'>About Me</a>
      </motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        onClick={closeMenu}
        className={s.listItem}>
        <a href="#skills">Skills & Education</a>
      </motion.li>
    </ul>
  )
}
export default NavLinks