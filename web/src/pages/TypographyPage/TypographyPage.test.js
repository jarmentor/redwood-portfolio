import { render, cleanup } from '@testing-library/react'

import TypographyPage from './TypographyPage'

describe('TypographyPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<TypographyPage />)
    }).not.toThrow()
  })
})
