import styled from 'styled-components'

const getHeadlineSize = (level) => {
  let sizes = ['96', '57', '46', '32', '23', '19']
  return sizes[level - 1]
}

const Headline = styled(({ level }) => `h${level}`)`
  font-size: ${({ level, unit }) => `${getHeadlineSize(level)}${unit || 'px'}`};
  font-family: 'Merriweather', serif;
  text-rendering: optimizeLegibility;
`

const StyledHeadline = (props) => <Headline as={`h${props.level}`} {...props} />

export default StyledHeadline
