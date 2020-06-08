import { render, cleanup } from '@redwoodjs/testing'

import SocialLogo from './SocialLogo'

describe('SocialLogo', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<SocialLogo />)
    }).not.toThrow()
  })
})
