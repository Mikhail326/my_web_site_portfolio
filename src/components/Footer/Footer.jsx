import s from './Footer.module.css'
import Socials from './Socials/Socials'
import Title from './Title/Title'

const Footer = () => {
  return (
    <div className={s.containerFooter}>
      <Title />
      <Socials />
      <h6>© 2021 Mikhail Stelmakh</h6>
    </div>
  )
}
export default Footer