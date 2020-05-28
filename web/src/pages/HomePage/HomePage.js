import { Link, routes } from '@redwoodjs/router'

import { PageLayout } from '@layouts'
const HomePage = () => (
  <PageLayout>
    <h1>Welcome</h1>
    <p>
      This site is still in active development. However, the{' '}
      <Link to={routes.contact()}>contact form</Link> functions properly.
    </p>
  </PageLayout>
)

export default HomePage
