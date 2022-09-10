var button = document.querySelector('#butt')
button.innerHTML = 'Order Now'     

// using Element properities to handle event 
window.onload = initializer;
var theCount = 0;
function initializer(){
    document.getElementById("incrementButton").onClick = increaseCount;
}
function increaseCount(){
    theCount++;
    document.getElementById("currentCurrent").innerHTML = theCount;
}
// not working