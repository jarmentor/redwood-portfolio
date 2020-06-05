import golden from '/src/lib/golden'

import { Lorem } from '@testContent'
import { PageLayout } from '@layouts'
import { Authenticated } from '@components'

const HomePage = () => (
  <PageLayout header="Hello!">
    <h2>Upper: {golden(12, 'up')}</h2>
    <h2>Lower: {golden(12)}</h2>
    <Lorem paragraphs="3" />
    <Authenticated />
  </PageLayout>
)

export default HomePage
