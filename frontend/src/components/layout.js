import { NavMenu, Footer } from "."

const Layout = ({ children, sections, footer, logo }) => {
  console.log(footer, '==')
  return (
    <>
      <NavMenu menus={sections} logo={logo} />
      {children}
      <Footer title={footer.title} email={footer.email} />
    </>
  )
}

export default Layout
