function listCSSClasses () {
  let classes = new Set()
  let elementsWithClasses = document.querySelectorAll('[class]')

  for (let element of elementsWithClasses) {
    for (let className of element.classList) {
      classes.add(className)
    }
  }
  return [...classes].sort()
}

console.log(
  'The page has the following classes:\n  .' +
  listCSSClasses().join('\n  .')
)