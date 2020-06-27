import { Link, routes } from '@redwoodjs/router'

import { PageLayout } from '@layouts'
import { Typography } from '@components'

const { Title } = Typography

export default () => (
  <PageLayout>
    <Title level="6">404</Title>
    <Title level="1">Page Not Found</Title>
    <Link to={routes.home()}>return home</Link>
  </PageLayout>
)
