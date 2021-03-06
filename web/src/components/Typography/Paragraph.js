import styled from 'styled-components'

const StyledParagraph = styled.p`
  font-size: 1em;
  max-width: 45rem;
`

const Paragraph = (props) => <StyledParagraph {...props} />

export default Paragraph
