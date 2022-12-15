// The global variable
let fixedValue = 4;

function incrementer() {
  return fixedValue+1;

  // Only change code above this line
}
incrementer();
console.log(incrementer(fixedValue))
function getOutput() {
    document.getElementById("output").innerText=incrementer(fixedValue);
}