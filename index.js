const SEPARATOR = '*** '
const SPACE = '<br/>'

let arr1 = [
  1, 5, 9, 4, 3, 6, 0, 7, 8, 2
]

console.log('arr1 before =', arr1)
toScreen('arr1 before', arr1)
arr1 = arr1.sort()
console.log('arr1 after =', arr1)
toScreen('arr1 after', arr1)

//*************

let arr2 = [
  { idx: 1 },
  { idx: 5 },
  { idx: 9 },
  { idx: 4 },
  { idx: 3 },
  { idx: 6 },
  { idx: 0 },
  { idx: 7 },
  { idx: 8 },
  { idx: 2 }
]

console.log('arr2 before =', arr2)
toScreen('arr2 before', arr2)
arr1 = arr2.sort((a, b) => a.idx - b.idx)
console.log('arr2 after =', arr2)
toScreen('arr2 before', arr2)

//*************

function toScreen(label, arr) {
  const SEPARATOR = '*** '
  const SPACE = '<br/>'
  document.write(SPACE, SEPARATOR, label, SPACE, SPACE)
  arr.forEach((datum) => {
    console.log(typeof datum)
    if (typeof datum === 'object')
      document.write(Object.values(datum), SPACE)
    else
      document.write(datum, SPACE)
  })
}
