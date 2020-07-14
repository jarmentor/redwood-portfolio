import styled from 'styled-components'

import { Typography, Box } from '@components'
import { PageLayout } from '@layouts'
import { mediaQuery } from '@styles'

import ContactForm from './ContactForm'

const { Title } = Typography

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  ${mediaQuery.lessThan('medium')`
    flex-direction: column;
    align-items: flex-start;
  `}
`

const ContactPage = () => {
  return (
    <PageLayout>
      <StyledFlexContainer>
        <Box>
          <Title level={1}>Contact</Title>
          <Title level={6}>
            Tell me about a new project or just say hello!
          </Title>
        </Box>
        <ContactForm />
      </StyledFlexContainer>
    </PageLayout>
  )
}
export default ContactPage
