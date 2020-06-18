import { Link, routes } from '@redwoodjs/router'
import styled from 'styled-components'

import { Typography } from '@components'
import { breakpoints } from '@styles'
import { PageLayout } from '@layouts'
const { Title, Paragraph } = Typography
const ProfilePhoto = styled.img`
  max-height: 15em;
  border-radius: 50%;
  filter: grayscale(1) brightness(1.24);
  mix-blend-mode: multiply;
  transition: ease-in-out 300ms;
  will-change: filter;
  margin: 2rem;

  :hover {
    filter: grayscale(0);
  }
`

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
    ${ProfilePhoto} {
      max-width: 10rem;
      margin: 0;
      margin-bottom: 2rem;
    }

    aside {
      background-color: var(--black);
      color: var(--white);
      max-width: 100%;
      padding: 2rem;

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
          <ProfilePhoto src="/profile_photo.jpg" alt="" />
          <Title level={1}>Hi, I'm Jonathan</Title>
        </header>
        <section>
          <LeadParagraph>
            I'm a designer and web developer focused on crafting meaningful user
            experiences through visual identities, digital design.
          </LeadParagraph>
        </section>
        <aside>
          <Title level={5}>Looking to start a new project?</Title>
          <Paragraph>
            <Link to={routes.contact()}>Contact me</Link> or{' '}
            <a href="mailto:jonathan@jonathanarmentor.com">send an e-mail.</a>{' '}
            I'm looking forward to making something new with you.
          </Paragraph>
        </aside>
      </Article>
    </PageLayout>
  )
}

export default AboutPage
