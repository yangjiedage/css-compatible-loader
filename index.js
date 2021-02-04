const loaderUtils = require('loader-utils')

module.exports = function (source) {
  const options = loaderUtils.getOptions(this)
  const scaleUnit = options.scale / 10
  const regpx = /(\d+)(px)/g
  const regPX = /(\d+)(PX)/g
  let nextSource = source.replace(regpx, (match, p1) => {
    return (p1 / scaleUnit) + 'rem'
  })

  nextSource = nextSource.replace(regPX, (match, p1) => {
    return p1 + 'px'
  })
  return nextSource
}