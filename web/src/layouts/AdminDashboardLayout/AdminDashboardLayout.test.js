import { render, cleanup } from '@redwoodjs/testing'

import AdminDashboardLayoutLayout from './AdminDashboardLayout'

describe('AdminDashboardLayoutLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<AdminDashboardLayoutLayout />)
    }).not.toThrow()
  })
})
