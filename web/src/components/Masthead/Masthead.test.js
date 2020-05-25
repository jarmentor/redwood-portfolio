import { render, cleanup } from '@testing-library/react'

import Masthead from './Masthead'

describe('Masthead', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Masthead />)
    }).not.toThrow()
  })
})
