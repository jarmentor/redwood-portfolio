import { render, cleanup } from '@testing-library/react'

import WelcomePage from './WelcomePage'

describe('WelcomePage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<WelcomePage />)
    }).not.toThrow()
  })
})
