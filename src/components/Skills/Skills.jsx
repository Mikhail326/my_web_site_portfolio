import s from './Skills.module.css'

const Skills = () => {
  return (
    <div id="skills" className={s.containerSkills}>
      <div className={s.titleSkills}>
        <h2>Skills & Education</h2>
      </div>
      <div className={s.wrapperContent}>
        <div className={s.contentItem}>
          <h3>Skills</h3>
          <ul className={s.contentList}>
            <li className={s.contentListItem}>
              <strong>Programming Languages:</strong> JavaScript
            </li>
            <li className={s.contentListItem}>
              <strong>Programming technologies and frameworks:</strong>  React, Redux, Bootstrap5
            </li>
            <li className={s.contentListItem}>
              <strong>Technologies:</strong> HTML5, CSS3, Scss, Gulp
            </li>
            <li className={s.contentListItem}>
              <strong>CMS:</strong> MODX Revolution
            </li>
            <li className={s.contentListItem}>
              <strong>Source control system:</strong> Git
            </li>
            <li className={s.contentListItem}>
              <strong>IDE:</strong> VS Code
            </li>
            <li className={s.contentListItem}>
              <strong>Languages:</strong> Russian (native), English (A2)
            </li>
          </ul>
        </div>
        <div className={s.contentItem}>
          <h3>Education</h3>
          <ul className={s.contentList}>
            <li className={s.contentListItem}>
              <strong>Belarusian state academy of music (2015-2020)</strong>
            </li>
            <li className={s.contentListItem}>
              <strong>SkillUp courses (apr 2021 - sept 2021):</strong> have passed a course of “Web and
              Javascript for Front-end development” as top 2 student in the group
            </li>
            <li className={s.contentListItem}>
              <strong>Freelance (2022)</strong>
            </li>
          </ul>
        </div>
        <div className={s.contentItem}>
          <h3>Experience</h3>
          <div className={s.contentList}>
            <p>As a part of the course program I have created a
              couple of websites using HTML, CSS, Scss, Bootstrap
              technologies stack, some dynamic components such
              as sliders, products card, smart search using vanilla JS
              I have progress in developing SPA applications with
              React and trying to grow in such direction</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills