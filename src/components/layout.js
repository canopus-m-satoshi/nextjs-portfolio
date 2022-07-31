import Footer from './footer'
import Header from './header'

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
export default Layout
