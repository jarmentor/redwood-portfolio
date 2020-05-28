import { render, cleanup } from '@testing-library/react'

import GithubLogo from './GithubLogo'

describe('GithubLogo', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<GithubLogo />)
    }).not.toThrow()
  })
})
