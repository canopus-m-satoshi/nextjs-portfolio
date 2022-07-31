import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div>
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
