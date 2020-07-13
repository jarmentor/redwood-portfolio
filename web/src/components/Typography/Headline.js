import styled, { css } from 'styled-components'

const getHeadlineSize = (level) => {
  let sizes = ['96', '57', '46', '32', '23', '19']
  return sizes[level - 1]
}

const fontSize = css`
  font-size: ${({ level }) => `${getHeadlineSize(level)}px`};
`

const Headline = styled(({ level }) => `h${level}`)`
  ${fontSize}
  font-family: 'Merriweather Sans', sans-serif;
  text-rendering: optimizeLegibility;
`

const StyledHeadline = (props) => <Headline as={`h${props.level}`} {...props} />

export default StyledHeadline
