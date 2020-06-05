import { render, cleanup } from '@redwoodjs/testing'

import Authenticated from './Authenticated'

describe('Authenticated', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Authenticated />)
    }).not.toThrow()
  })
})
