let n = 5;

for (let i = 0; i < n; i++) {
  console.log("hello, " + i);
}

console.log('Byee');

// 5. Proccess in NODEjs
console.log(process.argv);

let args = process.argv;

for(let i=2; i<args.length; i++){
  console.log('hello '+ args[i]);
}

// 6. Exports in files

// const someval = require("./Math")
// console.log(someval);

const math = require('./Math')
console.log(math.sum(2,5))
console.log(math.mul(2,5))
console.log(math.PI)

// 7. Exports in Directory

const info = require("./Fruits");  // in fruits direc. it searches for index.js and require data from that
console.log(info);
console.log(info[0]);
console.log(info[0].name);


// 11. local vs global installtion of packages

const figlet = require('figlet')

// figlet('Prasad Thorat', function(err, data){
//     if(err){
//         console.log('somehting went wrong');
//         console.log(err);
//         return;
//     }
//     console.log(data);
    
// })   --->> giving error so be aware and try to install locally ony