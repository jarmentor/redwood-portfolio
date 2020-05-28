import PageLayout from '@layouts/PageLayout'
import { Link, routes } from '@redwoodjs/router'
import { css } from 'linaria'

const profilePhotoStyles = css`
  width: 10em;
  border-radius: 50%;
  filter: grayscale(1) brightness(1.24);
`

const articleStyles = css`
  section + section {
    margin-top: 10em;
  }
`
const AboutPage = () => {
  return (
    <PageLayout>
      <article className={articleStyles}>
        <section>
          <img src="/profile_photo.jpg" alt="" className={profilePhotoStyles} />
          <h1>Hi, I'm Jonathan</h1>
          <p className="lead">
            I'm a designer and developer focused on crafting meaningful user
            experiences through visual identities and digital design.
          </p>
        </section>
        <section>
          <h2>Looking to start a new project?</h2>
          <p>
            <Link to={routes.contact()}>Contact me</Link> or{' '}
            <a href="mailto:jonathan@jonathanarmentor.com">
              send me an e-mail.
            </a>{' '}
            I'm looking forward to making something new with you.
          </p>
        </section>
      </article>
    </PageLayout>
  )
}

export default AboutPage
