let values = [1,2,3,77,5,102];
let myAverage = getAverage(values);
console.log ('my average is' + myAverage);
//console.log(values[5]);


function getAverage(valueList){
  //console.log(valueList);
  let sum = 0;
  for(i=0; i< valueList.length; i++){
    sum = sum + valueList[i];
}
//console.log('sum is:' + sum);
let avg = sum / valueList.length;
return avg;
//console.log('average is' + avg);
}

let myArray = ["Mercedes", "Audi", "BMW", "Rolls Royce"];
reverseArray(myArray);

function reverseArray(carList){
//console.log(carList);
  carList.reverse();
  console.log(carList);
  }

  let bigArray = [[1,2], [3,4]];
  flatten(bigArray);

  function flatten(theArray){
    let newArray = [];
    for(i = 0; i < theArray.length; i++){
      for( x = 0; x < theArray[i].length; x++){
          newArray.push(theArray[i][x]);
          console.log(newArray);
      }
    }
    return newArray;
  //console.log(newArray);
  }

let my_obj = {
  Name: "Nick" ,
  Location: "Scottsdale AZ"
  };
console.log(my_obj);
