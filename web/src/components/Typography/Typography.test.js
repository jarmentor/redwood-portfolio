import { render } from '@redwoodjs/testing'

import Typography from './Typography'

describe('Typography', () => {
  it('can make headlines', () => {
    expect(() => {
      render(<Typography.Headline level={1} />)
    }).not.toThrow()
  })

  it('can make paragraphs', () => {
    expect(() => {
      render(<Typography.Paragraph>example text</Typography.Paragraph>)
    }).not.toThrow()
  })
  it('can make mailto links', () => {
    expect(() => {
      render(
        <Typography.Link.MailTo address="jonathan@jonathanarmentor.com">
          link
        </Typography.Link.MailTo>
      )
    }).not.toThrow()
  })
})
