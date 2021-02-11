// const path = require('path')
//
// function getNewPath(oldPath, options) {
//   const base = path.basename(oldPath)
//   const dir = path.dirname(oldPath)
//
//   if (dir === '.') {
//     return options.prefix + '_' + base
//   }
//
//   return dir + '/' + options.prefix + '_' + base
// }
//
// module.exports = getNewPath


const path = require('path')

function getNewPath(oldPath, options, config) {
  const ext = path.extname(oldPath)
  const name = path.basename(oldPath,ext)
  const dir = path.dirname(oldPath)
  const base = name + (options.forceFormat ? '.'+ options.forceFormat : ext);
  if (dir === '.') {
    return options.prefix + '_' + base
  }

  return dir + '/' + options.prefix + '_' + base
}

module.exports = getNewPath
