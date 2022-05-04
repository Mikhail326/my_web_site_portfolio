import s from './AboutMe.module.css'
import Title from './Title/Title'
import InfoMe from './InfoMe/InfoMe'
import Form from './Form/Form'

const AboutMe = () => {

  return (
    <div id='aboutMe' className={s.containerAboutMe}>
      <Title />
      <div className={s.wrapperAboutMe}>
        <InfoMe />
        <Form />
      </div>
    </div>
  )
}

export default AboutMe