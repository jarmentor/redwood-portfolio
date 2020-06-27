import styled from 'styled-components'

const calculateFontSize = (level) => {
  const multiplier = level >= 3 ? 0.875 : 1.25
  return `${12 / (level * multiplier)}vmax`
}

const StyledTitle = styled(({ level }) => `h${level}`)`
  font-size: ${({ level }) => calculateFontSize(level)};
  line-height: 1;
  margin-bottom: 0.5em;
  text-rendering: optimizeLegibility;
  max-width: ${({ level }) => (level <= 3 ? '40rem' : '34rem')};

  footer & {
    font-size: 1.5rem;
    text-align: left;
    align-self: flex-end;
  }
`

const Title = (props) => <StyledTitle as={`h${props.level}`} {...props} />

export default Title
