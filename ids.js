const rootCategory = require('./rootCategory-depth-5.json')
const ids = {}

function readIds(cat, parent) {
  ids[cat.id] = {
    ...cat,
    child: undefined,
    parent
  }

  if(Array.isArray(cat.child)) {
    cat.child.forEach(c => {
      readIds(c, cat.id)
    });
  }
}
readIds(rootCategory)

exports = ids