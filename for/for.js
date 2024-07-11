// for(var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++){
// 	console.log('Hello World '+ nilaiAwal +'x');
// }

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var nomorAngkot = 1;

while(nomorAngkot <= angkotBeroperasi){
	console.log('Angkot No. '+ nomorAngkot +' beroperasi dengan baik.');
	nomorAngkot++;
} 

for(nomorAngkot = angkotBeroperasi + 1; nomorAngkot <= jmlAngkot; nomorAngkot++){
	console.log('Angkot No. ' + nomorAngkot +' sedang tidak beroperasi.')
}

