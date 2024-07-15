for(var i = 3; i >= 1; i--){
// Tebak angka
// alert('tebak angka dari 1 - 10 \nkamu punya 3 kesempatan');
var inputAngka = parseInt(prompt('masukkan angka tebakan'));

// membangkitkan  bilangan random dari 0 - 10;
var angka = Math.floor(Math.random()*10) + 1;
var hasil = '';
if( inputAngka === angka){
     hasil = 'BENAR';
     if( hasil == 'BENAR'){
     	  alert('anda '+ hasil + ' angka yang dicari '+ angka);
     }
}else if( inputAngka <= 10 && angka <= 10 ){
     hasil = 'TERLALU RENDAH!';
       if( hasil == 'TERLALU RENDAH!'){
     	  alert(hasil + ' ayo masih ada '+ (i - 1) +' kesempatan');
     }
}else {
	 hasil = 'masukkan angka antara 1 - 10';
	 alert(hasil + ' ayo masih ada '+ i +' kesempatan');
}

}