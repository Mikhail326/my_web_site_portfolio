import s from './Project.module.css'
import project1 from '../../../assets/image/project_1.png'
import project2 from '../../../assets/image/project_2.png'
import project3 from '../../../assets/image/project_3.png'
import project4 from '../../../assets/image/project_4.png'
import project5 from '../../../assets/image/project_5.png'
import project6 from '../../../assets/image/project_6.png'
import project7 from '../../../assets/image/project_7.png'
import project8 from '../../../assets/image/project_8.png'
import project9 from '../../../assets/image/project_9.jpg'
import project10 from '../../../assets/image/project_10.png'
import project11 from '../../../assets/image/project_11.png'
import project12 from '../../../assets/image/project_12.png'

const Project = () => {
  const arrProjects = [
    {
      backgroundImage: { backgroundImage: `url(${project10})` },
      id: '01',
      name: 'Lagerya',
      date: 'March 2022',
      link: 'http://lagerya.by'
    },
    {
      backgroundImage: { backgroundImage: `url(${project1})` },
      id: '02',
      name: 'Grid template init project',
      date: 'June 2021 - July 2021',
      link: 'https://mikhail326.github.io/grid-template-init-project/'
    },
    {
      backgroundImage: { backgroundImage: `url(${project2})` },
      id: '03',
      name: 'Kinozal template init project',
      date: 'June 2021 - July 2021',
      link: 'https://mikhail326.github.io/kinozal-template-init-project/'
    },
    {
      backgroundImage: { backgroundImage: `url(${project3})` },
      id: '04',
      name: 'JavaScript carousel project',
      date: 'July 2021',
      link: 'https://mikhail326.github.io/js-carousel/'
    },
    {
      backgroundImage: { backgroundImage: `url(${project4})` },
      id: '05',
      name: 'Calculation of purchase',
      date: 'September 2021',
      link: 'https://mikhail326.github.io/front-end-shop-template-/'
    },
    {
      backgroundImage: { backgroundImage: `url(${project5})` },
      id: '06',
      name: 'JS film search project',
      date: 'September 2021',
      link: 'https://mikhail326.github.io/film-search/'
    },
    {
      backgroundImage: { backgroundImage: `url(${project6})` },
      id: '07',
      name: 'Countries app react project',
      date: 'December 2021',
      link: 'https://mikhail326.github.io/countries__app__react__/'
    },
    {
      backgroundImage: { backgroundImage: `url(${project7})` },
      id: '08',
      name: 'Todo app react project',
      date: 'December 2021',
      link: 'https://mikhail326.github.io/todo_app_react/'
    },
    {
      backgroundImage: { backgroundImage: `url(${project8})` },
      id: '09',
      name: 'My web siet react project',
      date: 'December 2021',
      link: 'https://mikhailstelmakh.ru/'
    },{
      backgroundImage: { backgroundImage: `url(${project9})` },
      id: '10',
      name: 'Sea battle JS',
      date: 'January 2022',
      link: 'https://mikhail326.github.io/sea_battle_js/'
    },
    {
      backgroundImage: { backgroundImage: `url(${project11})` },
      id: '11',
      name: 'template-html-scss-js-php-mysql',
      date: 'september 2022',
      link: 'http://php.mikhailstelmakh.ru/'
    },
    {
      backgroundImage: { backgroundImage: `url(${project12})` },
      id: '12',
      name: 'send_letter_mail',
      date: 'october 2022',
      link: 'http://test.mikhailstelmakh.ru/'
    },
  ]
  return (
    <>
      {arrProjects.map(el => {
        return (
          <div className={s.project}>
            <a className={s.projectImage} style={el.backgroundImage} href={el.link}>
              <div className={s.projectImageMasc}></div>
              <div className={s.projectNumber}>{el.id}</div>
              <div className={s.infoProject}>
                <h3>{el.name}</h3>
                <div className={s.dataProject}>
                  <span>{el.date}</span>
                </div>
                <div className={s.link}>
                  <a href={el.link}>Go to the project</a>
                </div>
              </div>
            </a>
          </div>
        )
      })}
    </>
  )
}
export default Project