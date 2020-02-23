module.exports = function countCats(matrix) {
  let count = 0;
  for(array in matrix){
    for(item in matrix[array]){
    if(matrix[array][item] == ('^^')){ count += 1 }
    }
  }
  return count;
};
