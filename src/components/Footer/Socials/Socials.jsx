import s from './Socials.module.css'
import { BsGithub, BsInstagram, BsLinkedin, BsFacebook } from 'react-icons/bs'


const Socials = () => {
  return (
    <div className={s.socials}>
      <ul className={s.socialsList}>
        <li className={s.socialsListItem}>
          <a href="https://github.com/Mikhail326"><BsGithub /></a>
        </li>
        <li className={s.socialsListItem}>
          <a href="https://www.instagram.com/mikhail.stelmakh/"><BsInstagram /></a>
        </li>
        <li className={s.socialsListItem}>
          <a href="https://www.linkedin.com/in/mikhail-stelmakh/"><BsLinkedin /></a>
        </li>
        <li className={s.socialsListItem}>
          <a href="https://www.facebook.com/profile.php?id=100009889422548"><BsFacebook /></a>
        </li>
      </ul>
    </div>
  )
}
export default Socials