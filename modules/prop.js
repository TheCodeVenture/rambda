function prop(key, obj) {
  if (obj === undefined) {
    return holder => prop(key, holder)
  }

  return obj[ key ]
}

module.exports = prop
