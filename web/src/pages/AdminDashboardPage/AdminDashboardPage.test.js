import { render } from '@redwoodjs/testing'

import AdminDashboardPage from './AdminDashboardPage'

describe('AdminDashboardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminDashboardPage />)
    }).not.toThrow()
  })
})
