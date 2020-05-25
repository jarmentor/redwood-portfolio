import Navigation from 'src/components/Navigation'
import Masthead from 'src/components/Masthead'

import './HeaderLayout.css'

const HeaderLayout = ({ children }) => {
  return (
    <header>
      <Masthead className="masthead" />
      <Navigation />
      {children}
    </header>
  )
}

export default HeaderLayout
