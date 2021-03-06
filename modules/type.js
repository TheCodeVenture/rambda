function type(a){
  if (a === null) {

    return "Null"
  } else if (Array.isArray(a)) {

    return "Array"
  } else if (typeof a === "boolean") {

    return "Boolean"
  } else if (typeof a === "number") {

    return "Number"
  } else if (typeof a === "string") {

    return "String"
  } else if (a === undefined) {

    return "Undefined"
  } else if (a instanceof RegExp) {

    return "RegExp"
  }

  const asStr = a.toString()
  if(asStr.startsWith("async")){
    return "Async"
  }else if(asStr.includes("function")||asStr.includes("=>")){
    return "Function"
  }

  return "Object"
}

module.exports = type
