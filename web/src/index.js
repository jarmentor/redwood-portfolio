import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'
import React from 'react'
import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'

import GlobalStyle from './GlobalStyle'

import './scaffold.css'
netlifyIdentity.init()

const container = document.getElementById('redwood-app')

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={netlifyIdentity} type="netlify">
      <RedwoodProvider>
        <GlobalStyle />
        <Routes />
      </RedwoodProvider>
    </AuthProvider>
  </FatalErrorBoundary>
)

ReactDOM.render(<App />, container)
