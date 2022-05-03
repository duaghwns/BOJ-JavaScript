const fs = require('fs');
let arr = fs.readFileSync('input.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
arr.forEach((i,j)=>{
    arr[j] = Number(i)
})
arr.sort();

console.log(`${arr[0]} ${arr[1]} ${arr[2]}`)