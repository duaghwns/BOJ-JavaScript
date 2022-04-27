// 오늘 날짜 출력하기
const curr = new Date();
const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
const KR_TIME_DIFF = 9 * 60* 60 * 1000;
const kr_curr = new Date(utc + KR_TIME_DIFF);

console.log(kr_curr)