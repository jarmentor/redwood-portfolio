export const breakpoints = {
  small: 20,
  medium: 30,
  large: 45,
  xlarge: 60,
}

function greaterThan(size) {
  return (style) => `@media (min-width: ${breakpoints[size]}em) {${style}}`
}
function lessThan(size) {
  return (style) => `@media (max-width: ${breakpoints[size]}em) {${style}}`
}
function between(lowerLimit, upperLimit) {
  return (style) =>
    `@media (min-width: ${breakpoints[lowerLimit]}em)
      and (max-width: ${breakpoints[upperLimit]}em) {${style}}`
}

const mediaQuery = { greaterThan, lessThan, between }

export default mediaQuery
