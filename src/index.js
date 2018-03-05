module.exports = function longestConsecutiveLength(array) {
  // your solution here
  var mas = [];
  var k = 1;
  var ko = 1;
  for (var i=0; i<array.length; i++){
  if (array[i]-array[i-1]===1 && array[i-1]!=mas[i-1]){
    mas.push(array[i-1]);
    if(array[i]!=mas[i-1])
    mas.push(array[i]);
  }}
  for (var i=0; i<mas.length; i++){
    if(mas[i]===mas[i+1])
    mas.splice(i,1);
  }
  for (var i=0; i<mas.length; i++){
    if(mas[i]===(mas[i-1]+1)){
    k=k+1;
  }
  if (k>=ko){
    ko=k;
  }
    if(mas[i]!=(mas[i-1]+1)){
      k=1;
  }
  }
  return ko;
}
