function attachEventListener (){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function year() {
      console.log("1997", count++);
    });
}
attachEventListener();

