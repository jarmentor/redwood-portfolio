import Masthead from '@components/Masthead'
import Copyright from '@components/Copyright'
import './FooterLayout.css'

const FooterLayout = ({ title = 'Jonathan Armentor', children }) => (
  <footer>
    <Masthead title={title} />
    <Copyright holder={title} />
    {children}
  </footer>
)

export default FooterLayout
