// data example: 1 1 2 1 1 1

function constancy(arr) {
  let res = 0
  let prev = arr[0]
  let flag = false

  for (let i = 1; i < arr.length; i++) {
    if (prev === arr[i]) {
      flag = true
    } else if (flag) {
      res++
      flag = false
    }

    prev = arr[i]
  }

  if (flag) {
    res++
  }

  return res
}

console.log(constancy([2, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1]))