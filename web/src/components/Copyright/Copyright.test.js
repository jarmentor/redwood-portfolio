import { render, cleanup } from '@testing-library/react'

import Copyright from './Copyright'

describe('Copyright', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Copyright />)
    }).not.toThrow()
  })
})
