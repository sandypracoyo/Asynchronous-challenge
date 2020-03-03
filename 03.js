const cetakNilai = new Promise((resolve) => {
	for (let i = 1; i <= 3; i++) {
		resolve(console.log(i));
        setTimeout(() => {}, 1000);
	}
});
async function cetak() {
	await cetakNilai;
}
console.log('Done');
cetak();
