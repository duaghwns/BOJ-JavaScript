const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('input.txt').toString().split(' ');
let cnt = 1;
let bigger, sameNum, money  = 0;

input.forEach((i,j)=>{
    if(j<2) {
        if(input[j] == input[j+1]){
            sameNum = input[j]
            cnt++;
        }
        bigger = i > bigger ? i:bigger
    }
})

switch (cnt) {
    case 3: money += sameNum * 1000 + 10000; break;
    case 2: money += sameNum * 100 + 1000; break
    case 1: money += bigger * 100; break;
}
console.log(money)