// global scope / window scope 
//  digunakan dimanapun didalam program kita 
//  object paling luar didalam browser kita 
// var a = 1;		
// "use strict"
// function test(){
// 	// name confict 
//     a = 2; 
// }

// test();
//   console.log(a);

var a = 1;
function test(a){
   console.log(a);
}

test(a);
console.log(a);