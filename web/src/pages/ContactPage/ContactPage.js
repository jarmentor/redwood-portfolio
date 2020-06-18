import styled from 'styled-components'

import { Typography, Spacer } from '@components'
import { PageLayout } from '@layouts'
import { breakpoints } from '@styles'

import ContactForm from './ContactForm'

const { Title } = Typography

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`

const ContactPage = () => {
  return (
    <PageLayout>
      <StyledFlexContainer>
        <Title level={1}>Contact</Title>
        <Title level={6}>Tell me about a new project or just say hello!</Title>
        <Spacer top="5rem" />
        <ContactForm />
      </StyledFlexContainer>
    </PageLayout>
  )
}
export default ContactPage
