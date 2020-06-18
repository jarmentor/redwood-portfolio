import styled from 'styled-components'

import { Typography } from '@components'
import { PageLayout } from '@layouts'
import { breakpoints } from '@styles'

import ContactForm from './ContactForm'

const { Title } = Typography

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
  }
`

const ContactPage = () => {
  return (
    <PageLayout>
      <StyledFlexContainer>
        <div>
          <Title level={1}>Contact</Title>
          <Title level={6}>
            Tell me about a new project or just say hello!
          </Title>
        </div>
        <ContactForm />
      </StyledFlexContainer>
    </PageLayout>
  )
}
export default ContactPage
