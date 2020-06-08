import { Link, routes } from '@redwoodjs/router'
import styled from 'styled-components'

import { Typography } from '@components'
import { breakpoints } from '@styles'
import { PageLayout } from '@layouts'
const { Title, Paragraph } = Typography
const ProfilePhoto = styled.img`
  width: 10em;
  border-radius: 50%;
  filter: grayscale(1) brightness(1.24);
  mix-blend-mode: multiply;
  transition: 300ms ease-in-out;
  will-change: filter;

  :hover {
    filter: grayscale(0);
  }
`

const Article = styled.article`
  > img {
    /* align-self: center; */
    margin: 2rem;
  }

  aside {
    max-width: 23%;
    margin-top: 5rem;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    aside {
      max-width: 60%;
    }
  }
`

const AboutPage = () => {
  return (
    <PageLayout>
      <Article>
        <div>
          <ProfilePhoto src="/profile_photo.jpg" alt="" />
          <Title level={1}>Hi, I'm Jonathan</Title>
          <Paragraph className="lead">
            I'm a designer and web developer focused on crafting meaningful user
            experiences through visual identities, digital design.
          </Paragraph>
        </div>
        <aside>
          <Title level={4}>Looking to start a new project?</Title>
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
