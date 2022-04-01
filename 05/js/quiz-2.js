var num1 = parseInt(prompt('첫번째 수를 입력하세요.'));
var num2 = parseInt(prompt('두번째 수를 입력하세요.'));

function compareTwo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(compareTwo(num1, num2));
