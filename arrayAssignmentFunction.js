const findOddNumbers = function (givenArray){
  let arrayOfOddNumbers = [];
  for(number of givenArray){
    if(+number%2){
      arrayOfOddNumbers[arrayOfOddNumbers.length] = +number;
    }
  }
  return arrayOfOddNumbers
}

const findEvenNumbers = function (givenArray){
  let arrayOfEvenNumbers = [];
  for(number of givenArray){
    if(+number%2==0){
      arrayOfEvenNumbers[arrayOfEvenNumbers.length] = +number;
    }
  }
  return arrayOfEvenNumbers
}

const calculateSum = function (givenArray){
  let sum = 0;
  for(number of givenArray){
    sum = sum + (+number);
  }
  return sum;
}

const swapeElementsInReverse = function(givenArray){
  swapingLength=(givenArray.length)/2;
  for(let index=0; index<swapingLength; index++){
    valueToSwap = givenArray[index];
    givenArray[index]=givenArray[givenArray.length-1-index]; 
    givenArray[givenArray.length-index-1]=valueToSwap;
  }
  return givenArray;
}
const reverseArray = function (givenArray){
  return swapeElementsInReverse(givenArray);
}

const extractEveryNthElement = function (nNumber,givenArray){
  let requiredArray = [];
  for(let index = 0; index < givenArray.length; index+=nNumber){
    requiredArray[requiredArray.length] = +givenArray[index] 
  }
  return requiredArray;
}

const extractEverySecondElement = function (givenArray){
  let requiredArray = [];
  return extractEveryNthElement(2,givenArray);
}

const findGreatestNumber = function(givenArray){
  if(!givenArray.length){return ""};
  let greatestNumber = givenArray[0];
  arrayLength = givenArray.length
  for(let index=1; index<arrayLength; index++){
    if(greatestNumber<givenArray[index]){
      greatestNumber=givenArray[index];
    }
  }
  return greatestNumber;
}
const findLowestNumber = function(givenArray){
  let lowestNumber = givenArray[0];
  arrayLength = givenArray.length
  for(let index=1; index<arrayLength; index++){
    if(lowestNumber>givenArray[index]){
      lowestNumber=givenArray[index];
    }
  }
  return lowestNumber;
}

const calculateAverageOfNumbers = function(givenArray){
  let averageOfNumbers;
  let numberOfElements = givenArray.length;
  averageOfNumbers = (calculateSum(givenArray))/numberOfElements;
  return averageOfNumbers;
}

const mapLengthOfElements = function(givenArray){
  let mappedLengthArray = [];
  for(let index=0; index<givenArray.length; index++){
    mappedLengthArray[mappedLengthArray.length] = givenArray[index].length;
  }
  return mappedLengthArray;
}

const countOddNumbers = function(givenArray){
  let numbersOfOddNumbers = 0;
  for(let index=0; index<givenArray.length; index++){
    if(givenArray[index]%2){
      numbersOfOddNumbers++;
    }
  }
  return numbersOfOddNumbers;
}

const countEvenNumbers = function(givenArray){
  let numbersOfEvenNumbers = 0;
   for(let index=0; index<givenArray.length; index++){
    if(!(givenArray[index]%2)){
      numbersOfEvenNumbers++;
    }
  }
  return numbersOfEvenNumbers;
}

const countNumbersAboveThreshold = function(givenArray,threshold){
  let noOfNumbersAboveThre = 0;
  for(let index=0; index<givenArray.length; index++){
    if(givenArray[index]>threshold){
      noOfNumbersAboveThre++;
    }
  }
  return noOfNumbersAboveThre;
}

exports.findOddNumbers = findOddNumbers;
exports.findEvenNumbers = findEvenNumbers;
exports.calculateSum = calculateSum;
exports.reverseArray = reverseArray;
exports.extractEveryNthElement = extractEveryNthElement;
exports.extractEverySecondElement = extractEverySecondElement;
exports.findGreatestNumber = findGreatestNumber;
exports.findLowestNumber = findLowestNumber;
exports.calculateAverageOfNumbers = calculateAverageOfNumbers;
exports.mapLengthOfString = mapLengthOfElements;
exports.countOddNumbers = countOddNumbers;
exports.countEvenNumbers = countEvenNumbers;
exports.countNumbersAboveThreshold = countNumbersAboveThreshold;
