import styled from 'styled-components'

const getHeadlineSize = ({ level }) => {
  let headlineSizes = ['5', '3', '2.6', '2', '1.8', '1']
  return `${headlineSizes[level - 1]}em`
}

const StyledHeadline = styled(({ level }) => `h${level}`)`
  font-size: ${(props) => `${getHeadlineSize(props)}`};
  font-family: 'Merriweather Sans', sans-serif;
  text-rendering: optimizeLegibility;
`
const Headline = (props) => <StyledHeadline as={`h${props.level}`} {...props} />

export default Headline
