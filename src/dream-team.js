module.exports = function createDreamTeam( members ) {
  if(!Array.isArray(members)){return false}
  let result = [];
  for (item in members){
    if(typeof members[item] == 'string'){
      result.push(members[item].trim().slice(0, 1).toUpperCase());
    }
  }
  return result.sort().join('');
};