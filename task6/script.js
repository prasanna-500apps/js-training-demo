// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList,bookName) {
  let arr=[...bookList]
  arr.push(bookName);
  return arr;
  
  // Change code above this line
}

// Change code below this line

function remove(bookList,bookName) {
  let a=[...bookList]
  const book_index = a.indexOf(bookName);
  if (book_index >= 0) {

    a.splice(book_index, 1);
    return a;

    // Change code above this line
    }
}
let arr=add(bookList,"A Brief History of Time")
console.log(arr);
let a=remove(bookList,"On The Electrodynamics of Moving Bodies");
console.log(a);
let x=remove(add(bookList,"A Brief History of Time"), "On The Electrodynamics of Moving Bodies");
console.log(x)
function getOutput() {

    document.getElementById("output1").innerHTML =arr;
    document.getElementById("output2").innerHTML =a;
    document.getElementById("output3").innerHTML =x;
}