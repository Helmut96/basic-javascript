// var s = '';
// for( var i = 5; i > 0; i-- ){
//     for( var b = 0; b < i; b++ ){
//       s += '*';
//     }
//    s += '\n';
// }
// console.log(s)

/*
*****
 ****
  ***
   **
    *  
*/

// var s = '';
// for( var i = 5; i > 0; i-- ){
//     for( a = 5; a >= i; a-- ){
//     	s += '\0';
//     }
//     for( var b = 0; b < i; b++ ){	
//       s += '*';
//     }
//    s += '\n';
// }
// console.log(s)

/* 
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
*/

// var s = '';
// for( var i = 0; i < 9; i++ ){
//      if(i < 5){
//           for(var n = 0; n <= i; n++){
//              s += '*';
//           }
//      }else{
//          for(var j = 8; j >= i; j--){
//              s += '*';
//           }
//      }
//       s += '\n';
// }
// console.log(s)

/*
      *
     ***
    *****
   ******* 
*/ 

var s = '';
for( var i = 0; i <= 8; i++ ){
            if(i == 0){
                   s += '    \0';
              }i
              if(i == 1){
                   s += '   \0';
              }  
              if(i == 3){
                   s += '  \0';
              }  
              
               if(i == 5){
                   s += '\0';
              }   

              if(i == 6){
                   s += '\0';
              }  

              if(i == 8){
                   s += '\0';
              }  

       if( i % 2 == 0){
          for(var n = 0; n <= i; n++){
             s += '*';
          }
           s += '\n';
       }



         
}
console.log(s)