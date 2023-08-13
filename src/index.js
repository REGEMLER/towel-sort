
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length === 0){
    return []
  }
  let result = []; 
  matrix.forEach((item, index) => {
    if(index % 2 === 0){
      item.forEach(i => result.push(i))
    } else {
      let newItem = item.reverse();
      newItem.forEach(i => result.push(i))
    }
  })
  return result; 
}
