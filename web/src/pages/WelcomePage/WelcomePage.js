import styled from 'styled-components'

import { Typography } from '@components'

const { Title, Paragraph } = Typography

const StyledSection = styled.section`
  border: 1px solid black;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-items: center;
`

const WelcomePage = () => (
  <StyledSection>
    <Title level={1}>Welcome</Title>
    <Paragraph>
      Officia et commodo pariatur labore irure eiusmod consequat eiusmod commodo
      laborum est anim consectetur laborum. Laboris ad pariatur labore nulla do
      fugiat duis voluptate occaecat sunt mollit excepteur do consectetur.
      Laboris excepteur enim mollit et incididunt laboris et est.
    </Paragraph>
  </StyledSection>
)

export default WelcomePage
