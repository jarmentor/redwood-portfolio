import { useAuth } from '@redwoodjs/auth'

const Authenticated = () => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <a href="#" onClick={isAuthenticated ? logOut : logIn}>
        {isAuthenticated ? `Log Out (${currentUser.email})` : 'Log In'}
      </a>
    </>
  )
}

export default Authenticated
