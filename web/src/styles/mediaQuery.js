export const breakpoints = {
  small: 20,
  medium: 30,
  large: 45,
  xlarge: 60,
}

const MEDIA_QUERY_UNIT = 'em'

const mediaQuery = {
  largerThan: (size) => `(min-width: ${breakpoints[size]}${MEDIA_QUERY_UNIT})`,
  smallerThan: (size) => `(max-width: ${breakpoints[size]}${MEDIA_QUERY_UNIT})`,
  only: (size) => {
    let points = Object.values(breakpoints).sort()
    let intent = points.indexOf(breakpoints[size])

    return `(min-width: ${
      points[intent === 0 ? 0 : intent - 1]
    }${MEDIA_QUERY_UNIT}) and (max-width: ${
      points[intent === points.length - 1 ? intent : intent + 1]
    }${MEDIA_QUERY_UNIT})`
  },
  between: (sizes) => {
    let breaks = []
    sizes.forEach((size) => {
      breaks.push(breakpoints[size])
    })
    breaks.sort()

    return `(min-width: ${breaks[0]}${MEDIA_QUERY_UNIT})
      and (max-width: ${breaks[1]}${MEDIA_QUERY_UNIT})`
  },
}

export default mediaQuery
