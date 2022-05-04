import NavLinks from '../NavLinks/NavLinks'
import s from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav className={s.Navigation}>
      <NavLinks />
    </nav>
  )
}
export default Navigation