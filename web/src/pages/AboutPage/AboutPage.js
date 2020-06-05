import { Link, routes } from '@redwoodjs/router'
import { styled } from 'linaria/react'

import { PageLayout } from '@layouts'

const ProfilePhoto = styled.img`
  width: 10em;
  border-radius: 50%;
  filter: grayscale(1) brightness(1.24);
  mix-blend-mode: multiply;
  transition: 300ms ease-in-out;
  will-change: filter;

  &:hover {
    filter: grayscale(0);
  }
`
const Section = styled.section`
  & + & {
    margin-top: 10em;
  }
`

const AboutPage = () => {
  return (
    <PageLayout>
      <article>
        <Section>
          <ProfilePhoto src="/profile_photo.jpg" alt="" />
          <h1>Hi, I'm Jonathan</h1>
          <p className="lead">
            I'm a designer and developer focused on crafting meaningful user
            experiences through visual identities and digital design.
          </p>
        </Section>
        <Section>
          <h2>Looking to start a new project?</h2>
          <p>
            <Link to={routes.contact()}>Contact me</Link> or{' '}
            <a href="mailto:jonathan@jonathanarmentor.com">
              send me an e-mail.
            </a>{' '}
            I'm looking forward to making something new with you.
          </p>
        </Section>
      </article>
    </PageLayout>
  )
}

export default AboutPage
