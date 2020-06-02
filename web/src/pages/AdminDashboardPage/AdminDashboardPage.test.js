import { render, cleanup } from '@redwoodjs/testing'

import AdminDashboardPage from './AdminDashboardPage'

describe('AdminDashboardPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<AdminDashboardPage />)
    }).not.toThrow()
  })
})
