import { useAuth } from '@redwoodjs/auth'

const Authenticated = () => {
  const { logIn, isAuthenticated, logOut, currentUser } = useAuth()

  return (
    <div>
      <a href="#" onClick={isAuthenticated ? logOut : logIn}>
        {isAuthenticated ? `Log Out (${currentUser.email})` : 'Log In'}
      </a>
    </div>
  )
}

export default Authenticated
