import styled from 'styled-components'

const StyledMain = styled.main`
  padding: 2rem;
  margin: 0 auto;
  max-width: 100%;
  min-height: 80vh;
`
const Content = ({ children, ...props }) => (
  <StyledMain {...props}>{children}</StyledMain>
)

export default Content
