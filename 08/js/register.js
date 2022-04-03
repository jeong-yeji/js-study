function newRegister() {
    // 이름 노드 생성
    const newP = document.createElement('p');
    const userName = document.getElementById('userName');
    const newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    // 삭제 버튼 추가
    const delBtn = document.createElement('span');
    const delTxt = document.createTextNode('X');
    delBtn.setAttribute('class', 'del');
    delBtn.appendChild(delTxt);
    newP.appendChild(delBtn);

    // 요소 추가
    const nameList = document.getElementById('nameList');
    // nameList.appendChild(newP); // 맨 뒤에 추가
    nameList.insertBefore(newP, nameList.childNodes[0]); // 두번째 인자 앞에 추가
    userName.value = '';

    // 요소 삭제
    var removeBtns = document.querySelectorAll('.del');
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', function () {
            if (this.parentNode.parentNode) {
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        });
    }
}
