import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'
import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import { Theme } from '@styles'
import Routes from 'src/Routes'

import GlobalStyle from './GlobalStyle'

import './scaffold.css'
netlifyIdentity.init()

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={netlifyIdentity} type="netlify">
      <Theme>
        <RedwoodProvider>
          <GlobalStyle />
          <Routes />
        </RedwoodProvider>
      </Theme>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
