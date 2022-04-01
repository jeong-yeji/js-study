let cnt = 0;
const randomNumber = Math.floor(Math.random() * 100) + 1;

// 엔터키 입력 시 동작하도록 설정
document.querySelector('#try').onkeypress = function (e) {
    if (e.keycode == 13 || e.which == 3) {
        finding();
        return false; // keypress 이벤트가 발생했을 때 브라우저가 기본으로 하는 동작 취소
    }
};

function finding() {
    let userNumber = document.querySelector('#try').value;

    if (userNumber >= 1 && userNumber <= 100) {
        if (userNumber < randomNumber) {
            document.querySelector('#display').innerText = 'UP!';
            console.log('up');
        } else if (userNumber > randomNumber) {
            document.querySelector('#display').innerText = 'DOWN!';
            console.log('down');
        } else {
            document.querySelector('#display').innerHTML = "<span style='color:red'>CORRECT!</span>";
            console.log('correct');
        }
        cnt++;
        document.querySelector('#counter').innerText = `시도 횟수: ${cnt}회`;
        document.querySelector('#try').value = '';
    } else {
        alert('1부터 100 사이의 숫자를 입력하세요.');
    }
}
