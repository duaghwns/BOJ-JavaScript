const curr = new Date();
const utc = curr.getTime() + curr.getTimezoneOffset() * 60000;
const KR_TIME_DIFF = 9 * 60 * 60000;
const kr_curr = new Date(utc + KR_TIME_DIFF);

const y = kr_curr.getFullYear()
let m = `${kr_curr.getMonth()+1}`
const d = kr_curr.getDate()

m = m.length<2 ? '0'+m:m;

console.log(`${y}-${m}-${d}`)