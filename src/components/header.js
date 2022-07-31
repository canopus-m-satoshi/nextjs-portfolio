import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <Link href="/">
            <a>
              <Image src="/images/logo.png" alt="logo" height={50} width={50} />
            </a>
          </Link>
          <ul>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
export default Header
