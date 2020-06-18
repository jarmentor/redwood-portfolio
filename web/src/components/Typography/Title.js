import styled from 'styled-components'

const StyledTitle = styled(({ level }) => `h${level}`)`
  font-size: ${({ level }) => {
    return `${12 / (level >= 3 ? level * 0.875 : level * 1.25)}vmax`
  }};
  line-height: 1;
  margin-bottom: 0.5em;
  text-rendering: optimizeLegibility;
  max-width: ${({ level }) => (level < 3 ? '40rem' : '34rem')};

  footer & {
    font-size: 1.5rem;
    text-align: left;
    align-self: flex-end;
  }
`

const Title = (props) => {
  return <StyledTitle as={`h${props.level}`} {...props} />
}

export default Title
