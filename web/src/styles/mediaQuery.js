export const breakpoints = {
  small: 20,
  medium: 30,
  large: 45,
  xlarge: 60,
}

// @TODO: Refactor to media query builder

const greaterThan = (size) => (style) =>
  `@media (min-width: ${breakpoints[size]}em) {${style}}`

const lessThan = (size) => (style) =>
  `@media (max-width: ${breakpoints[size]}em) {${style}}`

const between = (lowerLimit, upperLimit) => (style) =>
  `@media (min-width: ${breakpoints[lowerLimit]}em)
      and (max-width: ${breakpoints[upperLimit]}em) {${style}}`

const mediaQuery = { greaterThan, lessThan, between }

export default mediaQuery
