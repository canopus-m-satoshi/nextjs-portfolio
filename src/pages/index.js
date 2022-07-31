import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'

const Index = () => {
  return (
    <Layout>
      <div>
        <Image
          src="/images/index-hero.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
          quality={90}
        />
        <div>
          <h1>I'm CANOPUS</h1>
          <h3>Front-end Developer</h3>
        </div>
        <div>
          <div>
            <div>
              <h2>JavaScript Nerd</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                officia inventore cupiditate itaque culpa eius quas perferendis
                exercitationem in, repellat voluptates! Accusamus ratione
                doloribus possimus quo veniam maxime, error modi?
              </p>
              <Image
                src="/images/profile.jpg"
                alt="profile"
                height={1195}
                width={1000}
                quality={90}
              />
            </div>
          </div>
          <div>
            <h2>SKills</h2>
            <div>
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
          <div>
            <Link href="/contact">
              <a>Make It Hapeen!</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Index
