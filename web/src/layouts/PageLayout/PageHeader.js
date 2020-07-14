import { routes } from '@redwoodjs/router'

import { Layout, Masthead, Navigation } from '@components'

const { Header } = Layout

const PageHeader = () => (
  <Header>
    <Masthead to={routes.home()}>Jonathan Armentor</Masthead>
    <Navigation>
      <Navigation.Item to={routes.home()} className="sr-only">
        Home
      </Navigation.Item>
      <Navigation.Item to={routes.about()}>About</Navigation.Item>
      <Navigation.Item to={routes.contact()}>Contact</Navigation.Item>
    </Navigation>
  </Header>
)

export default PageHeader
