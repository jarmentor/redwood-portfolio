import { render, cleanup } from '@testing-library/react'

import Navigation from './Navigation'

describe('Navigation', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Navigation />)
    }).not.toThrow()
  })
})
