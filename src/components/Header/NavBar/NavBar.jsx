import MobileNavigation from '../MobileNavigation/MobileNavigation'
import Navigation from '../Navigation/Navigation'
import s from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={s.navBar}>
      <MobileNavigation />
      <Navigation />
    </div>
  )
}
export default NavBar