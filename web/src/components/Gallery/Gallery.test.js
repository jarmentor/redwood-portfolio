import { render, cleanup } from '@testing-library/react'

import Gallery from './Gallery'

describe('Gallery', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Gallery />)
    }).not.toThrow()
  })
})
