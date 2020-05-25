import { render, cleanup } from '@testing-library/react'

import ProjectPage from './ProjectPage'

describe('ProjectPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectPage />)
    }).not.toThrow()
  })
})
