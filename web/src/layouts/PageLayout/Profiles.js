import styled from 'styled-components'

import { Typography } from '@components'

const ProfileContainer = styled.div`
  margin: 2rem 0;

  a {
    display: block;
    text-transform: uppercase;
    :hover {
      text-decoration: line-through;
    }
  }
`

const Profiles = ({ socials }) => (
  <ProfileContainer>
    {socials.map((profile, i) => (
      <Typography.SocialLink key={i} {...profile} />
    ))}
  </ProfileContainer>
)

export default Profiles