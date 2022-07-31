import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'

import * as style from '../styles/index.module.scss'

const Index = () => {
  return (
    <Layout>
      <div className={style.hero}>
        <Image
          src="/images/index-hero.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
          quality={90}
        />
        <div className={style.textContainer}>
          <h1>I'm CANOPUS</h1>
          <h3>Front-end Developer</h3>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.profile}>
          <div>
            <h2>JavaScript Nerd</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              officia inventore cupiditate itaque culpa eius quas perferendis
              exercitationem in, repellat voluptates! Accusamus ratione
              doloribus possimus quo veniam maxime, error modi?
            </p>
          </div>
          <Image
            src="/images/profile.jpg"
            alt="profile"
            height={1195}
            width={1000}
            quality={90}
          />
        </div>
        <div className={style.skills}>
          <h2>SKills</h2>
          <div className={style.skillsContainer}>
            <div>
              <img src="/images/javascript.svg" alt="javascript" />
              <span>JavaScript / 10 years</span>
            </div>
            <div>
              <img src="/images/react.svg" alt="react" />
              <span>React / 5 years</span>
            </div>
            <div>
              <img src="/images/gatsby.svg" alt="gatsby" />
              <span>Gatsby / 3 years</span>
            </div>
            <div>
              <img src="/images/next.svg" alt="next" />
              <span>Next.JS / 3 years</span>
            </div>
          </div>
        </div>
        <div className={style.ctaButton}>
          <Link href="/contact">
            <a>Make It Happen!</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
export default Index
