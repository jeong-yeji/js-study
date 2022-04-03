// 이미지 변경
const bigPic = document.querySelector('#cup');
const smallPics = document.querySelectorAll('.small');

for (i = 0; i < smallPics.length; i++) {
    smallPics[i].addEventListener('click', function () {
        newPic = this.src;
        bigPic.setAttribute('src', newPic);
    });
}

// 상세 설명 보기
var isOpen = false;
const view = document.getElementById('view');
view.addEventListener('click', function () {
    if (isOpen) {
        document.getElementById('detail').style.display = 'none';
        view.innerText = '상세 설명 보기';
        isOpen = false;
    } else {
        document.getElementById('detail').style.display = 'block';
        view.innerText = '상세 설명 닫기';
        isOpen = true;
    }
});
