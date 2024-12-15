/*
  //Problem
  ----------
  Give a rectangular matrix of characters odd a border of a sterisks (*) to it.

  //Example
  ----------
  picture = ['abc','ded']  ======> ['*****','*abc*','*ded*','*****']

  //Hints
  --------
  concat();
  unshift();
  push();

*/

function addBorder(picture) {
  let wall = "*".repeat(picture[0].length + 2);
  picture.push(wall);
  picture.unshift(wall);
  // i = 2
  // length = 4
  // update length = 3;
  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }

  return picture;
}

console.log(addBorder(["abc", "ded"]));

// for (let i = 1; i < picture.length - 1; i++){
//   picture[i] = "*".concat(picture[i], "*");
// };
