import { render, cleanup } from '@testing-library/react'

import InputText from './InputText'

describe('InputText', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<InputText />)
    }).not.toThrow()
  })
})
