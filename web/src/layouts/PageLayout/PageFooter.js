import { Layout, Copyright, Authenticated, Typography } from '@components'
import { default as socialProfiles } from '@assets/profiles'

import Profiles from './Profiles'
const { Footer } = Layout
const { Title, Small } = Typography

const PageFooter = () => (
  <Footer>
    <Title level={6}>
      <a href="mailto:jonathan@jonathanarmentor.com">
        jonathan@jonathanarmentor.com
      </a>
    </Title>

    <Profiles socials={socialProfiles} />
    <Copyright>Jonathan Armentor</Copyright>
    <Small>
      <Authenticated />
    </Small>
  </Footer>
)

export default PageFooter
