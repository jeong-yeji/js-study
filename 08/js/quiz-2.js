const buttons = document.querySelectorAll('.check');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        this.parentNode.style.color = '#ccc';
    });
}
