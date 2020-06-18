import styled from 'styled-components'

const StyledParagraph = styled.p`
  font-size: 1rem;
  max-width: 45rem;
`

const Paragraph = (props) => <StyledParagraph {...props} />

export default Paragraph
