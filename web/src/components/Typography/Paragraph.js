import styled from 'styled-components'

const StyledParagraph = styled.p`
  :first-of-type,
  .lead {
    font-size: 135%;
    color: rgba(0, 0, 0, 0.8);
  }
`

const Paragraph = ({ children, ...props }) => {
  return <StyledParagraph {...props}>{children}</StyledParagraph>
}

export default Paragraph
