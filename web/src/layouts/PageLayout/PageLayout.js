import { Layout } from '@components'

import { default as Header } from './PageHeader'
import { default as Footer } from './PageFooter'

const { Content } = Layout

const Page = ({ title, children }) => (
  <Layout>
    <Header pageTitle={title} />
    <Content>{children}</Content>
    <Footer />
  </Layout>
)

export default Page
