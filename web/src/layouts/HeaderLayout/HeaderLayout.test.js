import { render, cleanup } from '@testing-library/react'

import HeaderLayout from './HeaderLayout'

describe('HeaderLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderLayout />)
    }).not.toThrow()
  })
})
