var tanya = true
while( tanya ) {
// cara kerja game 
// algortihma / sudo code
// menangkap pilihan player
var player = prompt('pilih : gajah, semut, orang');

// menangkap pilihan komputer
// membangkitkan / mengenerate bilangan random 
var computer = Math.random();

if(computer < 0.34){
	 computer = 'gajah';
} else if(computer >= 0.34 && computer <= 0.67){
	 computer = 'orang';
}else{
	computer = 'semut';
}
// console.log(computer);

var hasil = '';
// menentukan rules
if(player == computer){
	 hasil = 'SERI!'
}else if ( player == 'gajah' ){
	 // if( computer == 'orang' ){
	 // 	 hasil = 'MENANG!';
	 // }else{
	 // 	 hasil = 'KALAH!'
	 // }

	hasil = (computer == 'orang') ? 'MENANG!' : 'KALAH!';
}else if( player == 'orang' ){
	hasil = ( computer == 'gajah') ? 'KALAH!' : 'MENANG!'
}else if( player == 'semut' ){
	hasil = ( computer == 'orang') ? 'KALAH!' : 'MENANG!'
}else{
	 hasil = 'Memasukkan pilihan yang salah!';
}
// tampilkan hasilnya 
alert('Kamu memilih : '+ player +' dan komputer memilih : '+ computer +' \nMaka hasilnya : kamu '+ hasil);

tanya  = confirm('lagi?');
}

alert('terima kasih sudah bermain.');