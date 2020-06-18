import styled from 'styled-components'

const StyledSpacer = styled.div`
  padding-top: ${(props) => props.top || '2.5rem'};
  padding-bottom: ${(props) => props.bottom || '2.5rem'};
  padding-left: ${(props) => props.left || 'auto'};
  padding-right: ${(props) => props.right || 'auto'};
`

const Spacer = (props) => <StyledSpacer {...props} />

export default Spacer
