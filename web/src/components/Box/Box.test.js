import { render } from '@redwoodjs/testing'

import Box from './Box'

describe('Box', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Box />)
    }).not.toThrow()
  })
})
