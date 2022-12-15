function splitify(str) {

    // Only change code below this line
    
    return str.split(/\W/);
    
    // Only change code above this line
    
    }
    
function getOutput() {
    document.getElementById("output1").innerHTML = splitify("Hello World,I-am code");
    document.getElementById("output2").innerHTML =splitify("Earth-is-our home");
    document.getElementById("output3").innerHTML =splitify("This.is.a-sentence");
} 