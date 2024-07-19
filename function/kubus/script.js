/* Menjumlahkan volume 2 kubus */

/*
// Ketahui sisi masing2 kubus 
var sKubusA = 8;
var sKubusB = 3;

// Hitung volume masing-masing kubus
var vVolumeA = sKubusA * sKubusA * sKubusA;
var vKubusB = sKubusB * sKubusB * sKubusB;

// hasil 
var hasil = vVolumeA + vKubusB;
console.log(hasil);
*/

function jumlahDuaBuahKubus(a, b){
	 var volA;
	 var volB;
	 var total;

	 volA = a * a * a;
	 volB = b * b * b;

	 total = volA + volB;

	 return total;
}

alert(jumlahDuaBuahKubus(8, 3));
alert(jumlahDuaBuahKubus(10, 15));