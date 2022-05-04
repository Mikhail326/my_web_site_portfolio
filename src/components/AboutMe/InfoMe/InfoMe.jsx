import s from './InfoMe.module.css'
import { SiJavascript, SiReact, SiHtml5, SiCss3 } from 'react-icons/si'

const InfoMe = () => {
  return (
    <div className={s.infoMe}>
      <div className={s.infoMeOverflow}>About</div>
      <h3>About Me.</h3>
      <h4>Front-end Developer</h4>
      <div className={s.infoMeText}>
        <p>I'm Mikhail Stelmakh, a 27-year-old Belarusian <strong>Front-end developer</strong>. I like to <strong>resolve</strong> design problems, <strong>create</strong> smart user interface 
          and <strong>imagine</strong> useful interaction, developing rich web experiences web applications.
          I am always on the road to new <strong>knowledge</strong>. I am <strong>developing</strong> and
          keeping my skills up to date. <strong>Communicative</strong> and responsible person. I like to be part
          of a <strong>team</strong> and resolve difficult <strong>tasks</strong> as one.</p>
      </div>
      <div className={s.infoMeSkills}>
        <ul className={s.infoMeSkillsList}>
          <li className={s.infoMeSkillsListItem}><SiHtml5 /></li>
          <li className={s.infoMeSkillsListItem}><SiJavascript /></li>
          <li className={s.infoMeSkillsListItem}><SiCss3 /></li>
          <li className={s.infoMeSkillsListItem}><SiReact /></li>
        </ul>
      </div>
    </div>
  )
}
export default InfoMe