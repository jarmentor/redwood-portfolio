import { render } from '@redwoodjs/testing'

import ViewPostPage from './ViewPostPage'

describe('ViewPostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewPostPage />)
    }).not.toThrow()
  })
})
