import styled from 'styled-components'

import { mediaQuery } from '@styles'

import Header from './Header'
import Footer from './Footer'
import Content from './Content'

const StyledLayout = styled.div`
  max-width: 90vw;
  padding: auto 5vw;
  margin: 0 auto;

  @media ${mediaQuery.smallerThan('medium')} {
    max-width: 100vw;
    padding: 0;
    margin: 0;
  }
`
const Layout = (props) => {
  return <StyledLayout {...props} />
}

Layout.Header = Header
Layout.Footer = Footer
Layout.Content = Content

export default Layout
