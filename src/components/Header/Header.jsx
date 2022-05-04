import s from './Header.module.css'
import Logo from './Logo/Logo'
import NavBar from './NavBar/NavBar'


const Header = () => {
  return (
    <div id='header' className={s.containerHeader}>
      <Logo />
      <NavBar />
    </div>
  )
}
export default Header