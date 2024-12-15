/*
  //Problem
  ----------
  Give an array of integers, replace all the accurrences of elementToReplace with subtractionElem
  

  //Example
  ----------
  For inputArray = [1,2,1], elementToReplace = 1 and subtractionElem = 3, the output should be arrayReplace(inputArray, elementToReplace, substractionElement);
*/

function arrayReplace(inputArray, elementToReplace, substractionElement) {
  inputArray.forEach((element, index) => {
    if (elementToReplace === element) {
      inputArray[index] = substractionElement;
    }
  });
  console.log(inputArray);
}

arrayReplace([1, 2, 1], 1, 3);
