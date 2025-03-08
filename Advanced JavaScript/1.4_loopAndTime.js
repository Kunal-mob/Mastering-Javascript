// for (var i = 0; i < 4; i++) {
//   setTimeout(() => {
//     console.log(i + " ");
//   }, i * 1000);
// }

for (var i = 0; i < 4; i++) {
    (function(num){
  setTimeout(() => {
    console.log(num + " ");
  }, num * 1000);})(i)

}
