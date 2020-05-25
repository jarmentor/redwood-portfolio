import { render, cleanup } from '@testing-library/react'

import FooterLayout from './FooterLayout'

describe('FooterLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<FooterLayout />)
    }).not.toThrow()
  })
})
