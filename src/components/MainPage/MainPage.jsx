import Content from './Content/Content'
import Logo from './Logo/Logo'
import s from './MainPage.module.css'
import Overflow from './Overflow/Overflow'
import Socials from './Socials/Socials'

const MainPage = () => {
  return (
    <section id='mainPage' className={s.containerMainPage}>
      <Content />
      <Socials />
      <Logo />
      <Overflow />
    </section>
  )
}
export default MainPage