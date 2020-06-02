import { useAuth } from '@redwoodjs/auth'

import { PageLayout } from '@layouts'
const HomePage = () => {
  const { logIn, isAuthenticated, logOut, currentUser } = useAuth()
  return (
    <PageLayout>
      <h1>Hello.</h1>
      <p>
        Exercitation amet velit dolor qui veniam aute exercitation qui culpa.
        Sint duis ad non consequat sint qui Lorem quis exercitation voluptate et
        aute in. Pariatur proident officia non mollit id{' '}
        <a href="#">anim laborum qui voluptate</a> proident mollit duis
        excepteur consectetur. Ex dolor occaecat deserunt proident anim officia
        occaecat irure nulla.
      </p>

      <a href="#" onClick={isAuthenticated ? logOut : logIn}>
        {isAuthenticated ? `Log Out (${currentUser.email})` : 'Log In'}
      </a>
    </PageLayout>
  )
}
export default HomePage
