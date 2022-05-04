import s from './Overflow.module.css'

const Overflow = () => {
  return (
    <div>
      <span className={s.html}>HTML</span>
      <span className={s.css}>CSS</span>
      <span className={s.js}>JS</span>
      <span className={s.react}>REACT</span>
      <span className={s.node}>NODE.JS</span>
      <span className={s.redux}>REDUX</span>
      <span className={s.ajax}>AJAX</span>
    </div>
  )
}
export default Overflow