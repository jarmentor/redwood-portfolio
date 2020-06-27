import { Link, routes } from '@redwoodjs/router'
import styled, { css } from 'styled-components'

import { Typography } from '@components'

const MastheadLink = css`
  color: inherit;
  max-width: auto;
  margin: 0;
  line-height: 1;
  text-decoration: none;
`
const StyledMasthead = styled(Link)`
  ${MastheadLink}
  h1 {
    font-size: 1em;
    line-height: 1.5;
    text-transform: uppercase;
    margin-bottom: 0;
  }
`

const Masthead = ({ title, to, children, ...props }) => (
  <StyledMasthead to={to || routes.home()} {...props}>
    <Typography.Headline level={1}>{title || children}</Typography.Headline>
  </StyledMasthead>
)

export default Masthead
