const PHI = {
  up: 1.61803,
  down: 0.61803,
}

/**
 * @function golden
 * @description Determine the next Golden Ratio pair for a given number
 * @param  {number} number - Number on which the golden ratio pair is
 * @param  {string} direction - 'up' or 'down' - default: 'down'
 * @param  {number} precision - precision of the calculation - default: 2
 * @returns {number}
 */
function golden(number, direction = 'down', precision = 2) {
  return (PHI[direction] * number).toFixed(precision)
}

export default golden
