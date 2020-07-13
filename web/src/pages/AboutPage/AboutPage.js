import { Link, routes } from '@redwoodjs/router'
import styled from 'styled-components'

import { Typography } from '@components'
import { breakpoints } from '@styles'
import { PageLayout } from '@layouts'
const {
  Title,
  Paragraph,
  Link: { MailTo },
} = Typography

const LeadParagraph = styled(Paragraph)`
  font-size: 2em;
`

const Article = styled.article`
  & {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
    flex-direction: row;
  }

  ${LeadParagraph} {
    max-width: 80%;
    margin-bottom: 2rem;
  }

  header {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    flex-basis: 100%;
    order: -1;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    aside {
      max-width: 100%;

      h5:first-child {
        margin-top: 0;
      }
    }
  }
`

const AboutPage = () => {
  return (
    <PageLayout>
      <Article>
        <header>
          <Title level={1}>{`Hi, I'm Jonathan`}</Title>
        </header>
        <section>
          <Title level={2}>Designer + Web Developer</Title>
          <LeadParagraph>
            {`I'm a designer and web developer focused on crafting meaningful user
            experiences through visual identities, digital design.`}
          </LeadParagraph>
        </section>
        <aside>
          <Title level={5}>Looking to start a new project?</Title>
          <Paragraph>
            <Link to={routes.contact()}>Contact me</Link> or{' '}
            <MailTo address="jonathan@jonathanarmentor.com">
              send an e-mail.
            </MailTo>
            {` I'm looking forward to making something new with you.`}
          </Paragraph>
        </aside>
      </Article>
    </PageLayout>
  )
}

export default AboutPage
