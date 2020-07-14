import { Link, routes } from '@redwoodjs/router'
import styled from 'styled-components'

import { Typography } from '@components'

const StyledMasthead = styled(Link)`
  color: inherit;
  max-width: auto;
  margin: 0;
  line-height: 1;
  text-decoration: none;

  h1 {
    font-size: 1em;
    line-height: 1.5;
    text-transform: uppercase;
    margin-bottom: 0;
  }
`

const Masthead = ({ title, children, ...props }) => (
  <StyledMasthead to={routes.home()} {...props}>
    <Typography.Headline level={1}>{title || children}</Typography.Headline>
  </StyledMasthead>
)

export default Masthead
