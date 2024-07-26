/*
// calculator sederhana 
// inputan
alert('Masukkan dua buah angka untuk melakukan proses penghitungan');
var angka1 = parseInt(prompt('angka1'));
var angka2 = parseInt(prompt('angka2'));
var operator = prompt('pilih operator berikut : + - * /');
// proses 
function hitung(a, b, c){
	if(c == '+'){
		 return a + b;
	}else if( c == '-' ){
          return a - b;
	}else if( c == '*'){
          return a * b;
	}else if( c == '/' ){
         return a / b;
	}else{
		 alert('inputan salah');
	}
}
// output
alert(hitung(angka1, angka2, operator));

*/

var nama = function(){
	   return 10 + 5;
}

document.writeln(nama());