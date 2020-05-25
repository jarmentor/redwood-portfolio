import { render, cleanup } from '@testing-library/react'

import Project from './Project'

describe('Project', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Project />)
    }).not.toThrow()
  })
})
