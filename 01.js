const fs = require('fs')

const readDir = new Promise((resolve,reject)=>{
    fs.readdir('/', (err,res)=>{
        if(err) reject(err)
        resolve(res)
    })
})

readDir.then(res => console.log(res))
.catch(err=> console.log(err))
