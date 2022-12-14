import Layout from '../components/layout'

import * as style from '../styles/contact.module.scss'

const Contact = () => {
  return (
    <Layout>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>Contact</h1>
          <p>お気軽にご連絡ください</p>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="textarea">Message</label>
            <textarea
              name="messsage"
              rows="10"
              id="textarea"
              required></textarea>
            <button type="submit">送信</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default Contact
