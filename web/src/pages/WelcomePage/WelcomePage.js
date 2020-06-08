import { css } from 'styled-components'

import { Typography } from '@components'

const { Title, Paragraph } = Typography
const welcomeStyles = css`
  margin: 10vh;
  background-color: #fff;
  border: 1px solid black;
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const WelcomePage = () => (
  <section className={welcomeStyles}>
    <Title level={1}>Welcome</Title>
    <Paragraph>
      Officia et commodo pariatur labore irure eiusmod consequat eiusmod commodo
      laborum est anim consectetur laborum. Laboris ad pariatur labore nulla do
      fugiat duis voluptate occaecat sunt mollit excepteur do consectetur.
      Laboris excepteur enim mollit et incididunt laboris et est.
    </Paragraph>
  </section>
)

export default WelcomePage
