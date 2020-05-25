import HeaderLayout from '../HeaderLayout'
import FooterLayout from '../FooterLayout'
import './PageLayout.css'
const PageLayout = ({ children }) => {
  return (
    <>
      <HeaderLayout />
      <main>{children}</main>
      <FooterLayout />
    </>
  )
}

export default PageLayout
