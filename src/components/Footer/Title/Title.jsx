import s from './Title.module.css'

const Title = () => {
  return (
    <div className={s.title}>
      <a href='#mainPage'>MS</a>
      <div className={s.titleOverflow}>Top</div>
    </div>
  )
}
export default Title