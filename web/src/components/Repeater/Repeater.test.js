import { render, cleanup } from '@testing-library/react'

import Repeater from './Repeater'

describe('Repeater', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Repeater />)
    }).not.toThrow()
  })
})
