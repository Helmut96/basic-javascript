var noAngkot = 1;
var jmlhAngkot = 10;
var angkotBeroperasi = 6;

for(noAngkot; noAngkot <= jmlhAngkot; noAngkot++){
	if(noAngkot <= angkotBeroperasi){
		console.log('Angkot No. '+ noAngkot +' beroperasi dengan baik');
	}else{
		console.log('Angkot No. '+ noAngkot +' sedang tidak beroperasi');
	}
}