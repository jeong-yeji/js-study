var bigPic = document.getElementById('cup');
var smallPics = document.querySelectorAll('.small');

// 1. setAttribute() 함수 이용
for (let i = 0; i < smallPics.length; i++) {
    smallPics[i].onclick = showBig;
}

function showBig() {
    var newPic = this.src;
    bigPic.setAttribute('src', newPic);
}

// 2. 속성 이용
// for (let i = 0; i < smallPics.length; i++) {
//     smallPics[i].onclick = function (event) {
//         bigPic.src = this.src;
//     };
// }
