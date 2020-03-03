### ECMASCRIPT 6
Ecmascript adalah sebuah standarisasi scripting language (Javascript) yang dibuat oleh European Computer Manufacturers Association (ECMA). ECMAscript6 sendiri merupakan ECMAscript versi 6 yang rilis pada tahun 2015.
ECMAscript6 sendiri merupakan versi perbaikan dari ECMAscript versi 5, beberapa contoh ECMAscript 6 yakni :
- Variable
Pada ES6, pembuatan variabel ada 2 cara yakni menggunakan let dan const. variabel dengan let dapat di assign/diubah sedangkan const tidak dapat diubah.
- Arrow Function
Arrow function merupakan penulisan fungsi dengan lebih singkat. sifatnya sama dengan anonymous function. dengan arrow function ini kita tidak perlu menuliskan kata kunci function, return dan kurung kurawal
contoh penulisannya
```
// Penulisan fungsi biasa
var multiplyES5 = function(x, y) {
  return x * y;
};

```

```
// Dengan arrow function
var multiplyES6 = (x, y) => { return x * y };

console.log(multiplyES6 (2,3));  // 6
```
- Spread Operator
Spread operator ini digunakan untuk memecah nilai sebuah array menjadi argumen yang dimasukkan ke dalam parameter dari function atau juga bisa digunakan untuk menggabungkan dua array atau lebih

```
const a = [1,2,3,4]
const b = [3,4,5,6]

a = [...a, ...b]
```

### Function 
Function merupakan sebuah codeblock yang digunakan untuk menjalankan suatu tugas tertentu. Sebuah fungsi membungkus satu atau banyak perintah. Setiap kali kita memanggil fungsi, maka perintah-perintah yang ada di dalam fungsi tersebut dijalankan. Secara umum fungsi digunakan untuk penggunaan kembali kode (code reuse) dan penyimpanan informasi (information hiding). Implementasi fungsi kelas pertama juga memungkinkan kita menggunakan fungsi sebagai unit-unit yang dapat dikombinasikan, seperti layaknya sebuah lego. 

#### Normal Function

```
function tampilHalo(){
    console.log('halo')
}
tampilHalo()
```
#### Function expression

```
const tampilHalo = function () {
    console.log('halo')
}
tampilHalo
```

#### Default Parameter
Kita dapat menggantikan parameter yang sudah diberikan yang bernilai undefined

```
function kalkulator(a,b=1,c) {
    const x = c ? c: 1
    console.log(a * b / x)
}

kalkulator(10) //Output:10
kalkulator(10,2) //Output:20
kalkulator(10,2,4) //Output:5
```


#### Arrow Function
```
const tampilHalo = (nama) =>{
    console.log('halo nama saya ' +nama)
}

tampilHalo('andi')
```

### Array
Array adalah tipe data yang berisi kumpulan dari nilai atau tipe data lain. Nilai di dalam array disebut dengan elemen, dan setiap elemen memiliki ‘nomor urut’ yang dikenal dengan istilah index.

#### Rest Parameter
Rest parameter adalah sebuah parameter didalam sebuah fungsi yang berbentuk array.
```
const total = (...arr) => {
    console.log(arr.reduce((x,y) => x * y))
}
total(1) //Output:1
total(1,2,3) Output:6
total(1,2,3,4,5,6) //Output:720
```
#### Operator di dalam array
- Array.sort()
`Array.sort()` digunakan untuk mengurutkan nilai dalam sebuah array
- Array.find()
`Array.find()` digunakan untuk mencari sebuah elemen dalam array
- Array.filter()
`Array.filter()` digunakan untuk memfilter array
- Array.forEach(), reduce(), map()
Digunakan untuk me return value dari array
- Push()
Method `push()` digunakan untuk menambahkan elemen baru di dalam array
- Pop()
Method `pop()` digunakan untuk menghapus elemen terakhir array
- Shift()
Method `shift()` digunakan untuk menghapus elemen pertama array
- Unshift()
Method `unshift()` digunakan untuk menambahkan elemen pertama array
- IndexOf()
Method `IndexOf()` digunakan untuk mengetahui posisi sebuah elemen
- Splice()
Method `Splice()` digunakan untuk menambah atau menghapus ke dalam sebuah array.

### Object
Objek di JavaScript sama seperti kebanyakan bahasa pemrograman lainnya, bisa dibandingkan dengan objek dalam kehidupan nyata. Konsep objek dalam JavaScript dapat dipahami dengan kehidupan nyata, objek nyata.

Di JavaScript, objek adalah entitas yang mandiri dengan properti dan tipe. Bandingkan dengan cangkir, misalnya. Sebuah cangkir adalah objek dengan banyak properti. Cangkir punya warna, desain, berat, materi bahan, dll. Dengan cara sama, objek JavaScript juga punya banyak properti yang menjelaskan karakteristiknya.

#### Spread Operator
Spread operator adalah operator yang digunakan menyebarkan key dan value object pada JavaScript.
```
const a = {
    id:1,
    name: "Zeus"
}
const b = {
    ...a,
    live:"Yunani" //Output:{id:1, name:'Zeus' live:'Yunani'}
}
const c = {
    id:2,
    age:104
}
console.log({...b, ...c}) //Output:{id:1, name:'Zeus' live:'Yunani', age:104}
```

#### Operasi pada object
Untuk mengetahui cara penggunaan operasi pada object dapat melihat pada dokumentasi mdn https://developer.mozilla.org/id/docs/Web/JavaScript/Panduan/Working_with_Objects

### ASYNCHRONUS
Pada Asynchronous hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses. Eksekusi dengan asynchronous tidak akan membloking atau menunggu suatu perintah sampai selesai. Daripada menunggu, asynchronous akan mengeksekusi perintah selanjutnya.
Contoh 
```
console.log('start');
setTimeout(() => { console.log('process')},100) // tunda selama 100 miliseconds
console.log('finish');

```

#### Callback
Callback adalah sebuah fungsi yang meminta parameter sebuah fungsi yang nanti nya fungsi sebagai parameter tersebut akan di eksekusi terlebih dahulu.

Contoh Callback
```
const fs = require('fs')

fs.readdir('/', (err, result) => {
  if (err) {
    throw new Error(err.message)
  }
  console.log(result)
})
```

#### Promise
Promise adalah sebuah object yang mempresentasikan sebuah penyelesaian perintah (atau bahkan sebuah error pada proses asynchronous) dan me-return value-nya. 

#### Method pada promise
- Promise.all([promise1, promise2])
- Promise.race([promise1, promise2])
- Promise.resolve(value)
- Promise.reject(value)

Contoh Promise 
```
const fs = require('fs')

const readDir = new Promise((resolve,reject)=>{
    fs.readdir('/', (err,res)=>{
        if(err) reject(err)
        resolve(res)
    })
})

readDir.then(res => console.log(res))
.catch(err=> console.log(err))

```
#### Async Await
Async function merupakan function yang mengandung ekspresi `await` untuk menunggu hasil dari sebuah promise diselesaikan terlebih dahulu (synchronous).

contoh 
```
const getUser = async (name) => {
const user = await getUserByName(name);
const account = await getUserAccountById(user.id);n
return account;
}

const myUser = getUser('andi');
```
















