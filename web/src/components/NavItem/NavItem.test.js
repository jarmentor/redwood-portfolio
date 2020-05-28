import { render, cleanup } from '@testing-library/react'

import NavItem from './NavItem'

describe('NavItem', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<NavItem />)
    }).not.toThrow()
  })
})
