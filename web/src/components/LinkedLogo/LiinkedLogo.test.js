import { render, cleanup } from '@redwoodjs/testing'

import LinkedLogo from './LinkedLogo'

describe('LinkedLogo', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<LinkedLogo />)
    }).not.toThrow()
  })
})
