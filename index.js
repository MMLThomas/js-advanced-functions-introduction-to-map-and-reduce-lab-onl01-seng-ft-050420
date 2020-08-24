// Your code here
function mapToNegativize(sourceArray){
  return sourceArray.map(element => element * -1);
}
function mapToNoChange(sourceArray){
  return sourceArray.map(element => element )
}
function mapToDouble(sourceArray){
  return sourceArray.map(element => element * 2);
}
function mapToSquare(sourceArray){
  return sourceArray.map(element => element * element);
}


function reduceToTotal(sourceArray, startingPoint){
  return sourceArray.reduce(function(total, element){total += element}, 0 );
}
function reduceToAllTrue(sourceArray){
  
}
function reduceToAnyTrue(sourceArray){
  
}