import { render, cleanup } from '@redwoodjs/testing'

import Spacer from './Spacer'

describe('Spacer', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Spacer />)
    }).not.toThrow()
  })
})
