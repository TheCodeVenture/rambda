function propEq(key, val, obj) {
  if (val === undefined) {
    return (valHolder, objHolder) => propEq(key, valHolder, objHolder)
  } else if (obj === undefined) {
    return holder => propEq(key, val, holder)
  }

  return obj[ key ] === val
}

module.exports = propEq
