const arr = [1, 2, 3, 4, 5];

function double(x) {
  return x * 2;
}
const output = arr.map(double);
console.log(output);


function triple(x) {
  return x * 3;
}
const outputTriple = arr.map(triple);
console.log(outputTriple);


function binary(x) {
  return x.toString(2);
}
const outputBinary = arr.map(binary);
console.log(outputBinary);




document.getElementById("doubleIt").innerHTML = output;
document.getElementById("tripleIt").innerHTML = outputTriple;
document.getElementById("binaryIt").innerHTML = outputBinary;

// Different Style to write 

// Higher Order Function
const array = [2, 3, 4, 5, 6]
const double1 = array.map(function doubleThis (x){
    return x*2
})
console.log(double1)

// Arrow Function 
const arrayNum = [11, 12, 13, 14, 15, 16]
const double2 = arrayNum.map((x) => x*2);
console.log(double2);