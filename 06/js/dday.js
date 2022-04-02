const now = new Date();
const firstDay = new Date('2022-04-01');
const dayTime = 1000 * 60 * 60 * 24;

function calcDate(days) {
    var future = firstDay.getTime() + days * dayTime;
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();
    document.getElementById(`date${days}`).innerText = `${year}년 ${month}월 ${date}일`;
}

var passedTime = now.getTime() - firstDay.getTime();
var passedDay = Math.round(passedTime / dayTime);
document.getElementById('accent').innerText = `${passedDay}일`;

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
