import Link from 'next/link'

import * as style from '../styles/common.module.scss'

const Footer = () => {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.insideContainer}>
        <a href="404">
          <img src="images/github.svg" alt="logo" />
        </a>
        <a href="404">
          <img src="images/linkedin.svg" alt="logo" />
        </a>
        <a href="404">
          <img src="images/twitter.svg" alt="logo" />
        </a>
        <a href="404">
          <img src="images/facebook.svg" alt="logo" />
        </a>
        <hr />
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <p>&copy;{new Date().getFullYear()} Canopus</p>
      </div>
    </footer>
  )
}
export default Footer
