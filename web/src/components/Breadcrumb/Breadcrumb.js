import styled from 'styled-components'

import { mediaQuery } from '@styles'
const StyledPageTitle = styled.span`
  display: block;
  background: var(--black);
  text-transform: uppercase;
  color: var(--white);
  padding-left: 1rem;
  padding-right: 1rem;
  ${mediaQuery.lessThan('medium')`
  display: none;
  `}
`

const Breadcrumb = () => {
  return (
    <StyledPageTitle>{document.location.href.split('/').pop()}</StyledPageTitle>
  )
}

export default Breadcrumb
