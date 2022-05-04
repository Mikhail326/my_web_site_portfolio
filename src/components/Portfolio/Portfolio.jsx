import s from './Portfolio.module.css'

import Title from './Title/Title'
import Project from './Project/Project'


const Portfolio = () => {
  
  return (
    <div id='portfolio' className={s.containerPortfolio}>
      <Title />
      <Project />
    </div>
  )
}
export default Portfolio
























































// <h2>Portfolio</h2>
//       <nav className={s.listNavBar}>
//         <ul className={s.list}>
//           <li className={s.list_item}><a href='/'>All Projects</a></li>
//           <li className={s.list_item}><a href='/'>UI DESIGN</a></li>
//           <li className={s.list_item}><a href='/'>JS Projects</a></li>
//           <li className={s.list_item}><a href='/'>React Projects</a></li>
//         </ul>
//       </nav>

//       <div className={s.projects}>
//         <div className={s.projectItem}>
//           <a href='/'>
//             <div className={s.projectItemImage}>
//               <img src={project1}alt='' />
//             </div>
//             <div className={s.projectItemContent}>
//               <h4>Name Project</h4>
//             </div>
//           </a>
//         </div>
//         <div className={s.projectItem}>
//           <a href='/'>
//             <div className={s.projectItemImage}>
//               <img src={project2} alt='' />
//             </div>
//             <div className={s.projectItemContent}>
//               <h4>Name Project</h4>
//             </div>
//           </a>
//         </div>
//         <div className={s.projectItem}>
//           <a href='/'>
//             <div className={s.projectItemImage}>
//               <img src={project3} alt='' />
//             </div>
//             <div className={s.projectItemContent}>
//               <h4>Name Project</h4>
//             </div>
//           </a>
//         </div>
//         <div className={s.projectItem}>
//           <a href='/'>
//             <div className={s.projectItemImage}>
//               <img src={project4} alt='' />
//             </div>
//             <div className={s.projectItemContent}>
//               <h4>Name Project</h4>
//             </div>
//           </a>
//         </div>
//         <div className={s.projectItem}>
//           <a href='/'>
//             <div className={s.projectItemImage}>
//               <img src={project5} alt='' />
//             </div>
//             <div className={s.projectItemContent}>
//               <h4>Name Project</h4>
//             </div>
//           </a>
//         </div>
//         <div className={s.projectItem}>
//           <a href='/'>
//             <div className={s.projectItemImage}>
//               <img src={project6} alt='' />
//             </div>
//             <div className={s.projectItemContent}>
//               <h4>Name Project</h4>
//             </div>
//           </a>
//         </div>
//         <div className={s.projectItem}>
//           <a href='/'>
//             <div className={s.projectItemImage}>
//               <img src={project7} alt='' />
//             </div>
//             <div className={s.projectItemContent}>
//               <h4>Name Project</h4>
//             </div>
//           </a>
//         </div>
//       </div>