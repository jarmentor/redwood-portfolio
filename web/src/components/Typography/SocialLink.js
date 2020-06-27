import styled from 'styled-components'

const linkProps = {
  rel: 'noopener noreferrer',
  target: '_blank',
}

const StyledSocialLink = styled.a`
  display: block;
  text-transform: uppercase;
  :hover {
    text-decoration: line-through;
  }
`

const SocialLink = ({ name, url }) => (
  <StyledSocialLink href={url} {...linkProps}>
    {name}
  </StyledSocialLink>
)

export default SocialLink
