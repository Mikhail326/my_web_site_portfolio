import s from './Content.module.css'
import { motion } from 'framer-motion'
import cv from '../../../assets/Front-end_developer.pdf'

const Content = () => {

  return (
    <div className={s.title}>
      <motion.h2
        initial={{
          x: '-100vh',
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{ delay: 0.3, type: 'spring', duration: 1, bounce: 0.3 }}
      >
        Mikhail Stelmakh
      </motion.h2>
      <motion.div
        initial={{
          x: '-50vh',
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{ delay: 0.3, type: 'spring', duration: 1, bounce: 0.3 }}
        className={s.subtitle}>
        <span>Front-end Developer</span>
      </motion.div>
      <motion.span
        initial={{
          x: '-50vh',
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{ delay: 0.3, type: 'spring', duration: 1, bounce: 0.3 }}
        className={s.link}>
        <a href={cv}>Download CV</a>
      </motion.span>
    </div>
  )
}
export default Content