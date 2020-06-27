import { routes } from '@redwoodjs/router'

import { Layout, Masthead, Nav } from '@components'

const { Header } = Layout

const PageHeader = () => (
  <Header>
    <Masthead />
    <Nav>
      <Nav.Item to={routes.home()}>Home</Nav.Item>
      <Nav.Item to={routes.about()}>About</Nav.Item>
      <Nav.Item to={routes.contact()}>Contact</Nav.Item>
    </Nav>
  </Header>
)

export default PageHeader
