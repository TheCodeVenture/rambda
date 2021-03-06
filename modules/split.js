function split(glue, str) {
  if (str === undefined) {
    return holder => split(glue, holder)
  }

  return str.split(glue)
}

module.exports = split
