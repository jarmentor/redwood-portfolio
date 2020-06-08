import { routes } from '@redwoodjs/router'

import {
  Layout,
  Copyright,
  Masthead,
  Nav,
  Authenticated,
  Typography,
} from '@components'
import { default as socialProfiles } from '@assets/profiles'

import Profiles from './Profiles'
const { Header, Content, Footer } = Layout

const Page = ({ children }) => (
  <Layout>
    <Header>
      <Masthead />
      <Nav>
        <Nav.Item to={routes.home()}>Home</Nav.Item>
        <Nav.Item to={routes.about()}>About</Nav.Item>
        <Nav.Item to={routes.contact()}>Contact</Nav.Item>
      </Nav>
    </Header>
    <Content>{children}</Content>
    <Footer>
      <Typography.Title level={6}>
        <a href="mailto:jonathan@jonathanarmentor.com">
          jonathan@jonathanarmentor.com
        </a>
      </Typography.Title>

      <Profiles socials={socialProfiles} />
      <Copyright>Jonathan Armentor</Copyright>
      <small style={{ marginTop: '1rem' }}>
        <Authenticated />
      </small>
    </Footer>
  </Layout>
)

export default Page
