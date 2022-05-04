import s from './Form.module.css'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'

const Form = () => {

  const sendEmail = async (e) => {
    e.preventDefault()
    await emailjs.sendForm(
      'service_es7rusp',
      'template_f0kzehd',
      e.target,
      'user_SZj91CfFwXJCwMZnQuy0Z')
    await emailjs.sendForm(
      'service_es7rusp',
      'template_f0kzehd',
      e.target,
      'user_SZj91CfFwXJCwMZnQuy0Z')
      .then(res => console.log(res)).catch(err => console.log(err))
  }

  const { register,
    formState: { errors },
  } = useForm()

  return (
    <div className={s.wrapperForm}>
      <div className={s.titleForm}>
        <h3>Lets Tolk.</h3>
        <h4>New projects, freelance inquiry or even a coffee.</h4>
      </div>
      <form className={s.form} onSubmit={sendEmail}>
        <label className={s.formName}>
          Name *:
        </label>
        <input className={s.formInput} {...register('name', {
          required: true,
        })} />
        <div>
          {errors?.name && <p>Поле обязательное!!!</p>}
        </div>
        <label className={s.formName}>
          Email *:
        </label>
        <input className={s.formInput} {...register('email', {
          required: true,
        })} />
        <div>
          {errors?.email && <p>Поле обязательное!!!</p>}
        </div>
        <label className={s.formName}>
          Message *:
        </label>
        <textarea name='message' rows='7' className={s.formInput} />
        <div>
          {errors?.message && <p>Поле обязательное!!!</p>}
        </div>
        <input className={s.inputSubmit} type='submit' value='Send Message' />
      </form>
    </div>
  )
}
export default Form