function sentensify(str) {

    // Only change code below this line
    
    
    return str.split(/\W/).join(' ')
    
    // Only change code above this line
    
    }
    
    
    let a=sentensify("May-the-force-be-with-you");
    
    console.log(a);
    
    let b=sentensify("The.force.is.strong.with.this.one")
    
    console.log(b);
    
    let c=sentensify("There,has,been,an,awakening")
    
    console.log(c);
function getOutput(){
    document.getElementById("output1").innerText=a;
    document.getElementById("output2").innerText=b;
    document.getElementById("output3").innerText=c;
}

