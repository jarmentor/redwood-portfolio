import PageLayout from '@layouts/PageLayout'
import { Link, routes } from '@redwoodjs/router'
import './AboutPage.css'
const AboutPage = () => {
  return (
    <PageLayout>
      <article>
        <section>
          <img src="/profile_photo.jpg" alt="" className="profilePhoto" />
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
