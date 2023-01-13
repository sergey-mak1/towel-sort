module.exports = function towelSort(matrix) {
  let arr2 = [];
  if (matrix === undefined || matrix.length === 0) {
    return arr2;
  }
  else {
    for (i = 0; i < matrix.length; i++) {
      if (i % 2 != 0) {
        arr2.push(matrix[i].reverse())
      }
      else {
        arr2.push(matrix[i])
      }
    }
    return arr2.flat(2)
  }

}