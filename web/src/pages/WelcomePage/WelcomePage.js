import { PageLayout } from '@layouts'
import { Typography } from '@components'

const { Title, Paragraph } = Typography

const WelcomePage = () => (
  <PageLayout>
    <Title level={1}>Welcome</Title>
    <Paragraph>
      Officia et commodo pariatur labore irure eiusmod consequat eiusmod commodo
      laborum est anim consectetur laborum. Laboris ad pariatur labore nulla do
      fugiat duis voluptate occaecat sunt mollit excepteur do consectetur.
      Laboris excepteur enim mollit et incididunt laboris et est.
    </Paragraph>
  </PageLayout>
)

export default WelcomePage
