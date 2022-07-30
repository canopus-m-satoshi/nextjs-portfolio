import Link from 'next/link'
import * as style from '../styles/index.module.css'

const Index = () => {
  return (
    <div>
      <h1 className={style.h1Text}>Index</h1>
      <Link href="/contact">
        <a>To Contact</a>
      </Link>
    </div>
  )
}
export default Index
