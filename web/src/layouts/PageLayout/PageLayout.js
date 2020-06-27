import { Layout } from '@components'

import { default as Header } from './PageHeader'
import { default as Footer } from './PageFooter'
const { Content } = Layout

const Page = ({ children }) => (
  <Layout>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Layout>
)

export default Page
