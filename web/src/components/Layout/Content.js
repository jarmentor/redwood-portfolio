import styled from 'styled-components'

const StyledMain = styled.main`
  padding: 2rem;
  margin: 0 auto;
  max-width: 100%;
  min-height: 80vh;
`
const Content = (props) => <StyledMain {...props} />

export default Content
