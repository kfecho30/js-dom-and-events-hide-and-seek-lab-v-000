function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target, nest){
  return document.querySelector(nest.target)
}
