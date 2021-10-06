const rootCategory = require('./rootCategory-depth-5.json')
const cats = []

function readIds(cat, path=[]) {
  cats.push( {
    ...cat,
    child: undefined,
    path
  })

  if(Array.isArray(cat.child)) {
    cat.child.forEach((c, i) => {
      readIds(c, [...path, [cat.id, i]])
    });
  }
}
readIds(rootCategory)

module.exports = cats

if (require.main === module) {
  console.log(JSON.stringify(cats, null, '  '))
}
