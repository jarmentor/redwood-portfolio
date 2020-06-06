import { PageLayout } from '@layouts'
import { Authenticated } from '@components'

const HomePage = () => (
  <PageLayout header="Hello!">
    <Authenticated />
  </PageLayout>
)

export default HomePage
