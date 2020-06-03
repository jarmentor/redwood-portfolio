import PostsCell from '@components/PostsCell'
import { NavLink, routes } from '@redwoodjs/router'
import { styled } from 'linaria/react'
import { css } from 'linaria'

import { AdminDashboardLayout } from '@layouts'
import { Masthead } from 'src/components'
import { breakpoints } from '@styles'

const mainstyles = css`
  padding: 2rem;
  margin: 0 auto;
  max-width: 100%;
  min-height: 60vh;
`

const Header = styled.header`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--yellow);
  min-height: 2rem;
  padding: 0.5rem 2rem;

  @media screen and (max-width: ${breakpoints.small}) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const AdminDashboardPage = () => {
  return (
    <AdminDashboardLayout>
      <Header>
        <Masthead title="Administration" />
        <nav>
          <ul>
            <NavLink to={routes.posts()}>Posts</NavLink>
          </ul>
        </nav>
      </Header>
      <main className={mainstyles}>
        <section>
          <h2>Posts</h2>
          <PostsCell />
        </section>
      </main>
    </AdminDashboardLayout>
  )
}

export default AdminDashboardPage
