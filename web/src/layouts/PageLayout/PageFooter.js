import styled from 'styled-components'

import { Layout, Copyright, Authenticated, Typography } from '@components'
import profiles from '@assets/profiles'
const { Footer } = Layout
const {
  Headline,
  Link: { MailTo, Social },
} = Typography

const FooterSection = styled.section`
  margin: 1em 0;
`

const SocialProfiles = ({ profiles }) => (
  <FooterSection>
    {profiles.map((account, i) => (
      <Social key={i} {...account} />
    ))}
  </FooterSection>
)

const PageFooter = () => (
  <Footer>
    <Headline level={6}>
      <MailTo address="jonathan@jonathanarmentor.com" />
    </Headline>
    <SocialProfiles {...{ profiles }} />
    <FooterSection>
      <Authenticated />
    </FooterSection>
    <FooterSection>
      <Copyright>Jonathan Armentor</Copyright>
    </FooterSection>
  </Footer>
)

export default PageFooter
