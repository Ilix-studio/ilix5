setTimeout(function () {
  console.log("1997");
}, 5000);

function x(y) {
  console.log("13");
  y();
}
x(function y() {
  console.log("December");
});
