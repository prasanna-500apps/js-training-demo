let a=[1,2,3,4,5]
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  // Only change code above this line
  return newArray;
};
console.log(a.myMap(item => item * 2))

function getOutput(){
    document.getElementById("output").innerText=a.myMap(item => item * 2);

}