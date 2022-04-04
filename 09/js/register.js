const userId = document.getElementById('user-id');
const pw1 = document.getElementById('user-pw1');
const pw2 = document.getElementById('user-pw2');

userId.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = comparePw;

function checkId() {
    if (userId.value.length < 4 || userId.value.length > 15) {
        alert('4~15자리의 영문과 숫자를 사용하세요.');
        userId.select(); // 다시 입력하도록 userId 필드 선택하되, 기존 입력 값 유지
    }
}

function checkPw() {
    if (pw1.value.length < 8) {
        alert('비밀번호는 8자리 이상이어야 합니다.');
        pw1.value = '';
        pw1.focus(); // 다시 입력하도록 pw1 필드 선택하되, 기존 값이 지워진 자리에 커서를 둠
    }
}

function comparePw() {
    if (pw1.value != pw2.value) {
        alert('암호가 다릅니다. 다시 입력하세요.');
        pw2.value = '';
        pw2.focus();
    }
}
