var items = [];

const addBtn = document.getElementById('add');
addBtn.addEventListener('click', addItem);
function addItem() {
    const newItem = document.getElementById('item');
    var item = newItem.value;
    if (item != null) {
        items.push(item);
        newItem.value = '';
        newItem.focus();
    }
    showList();
}

function showList() {
    var list = '<ul>';
    for (let i = 0; i < items.length; i++) {
        list += `<li>${items[i]}<span class='close' id='${i}'>X</span></li>`;
    }
    list += '</ul>';
    document.getElementById('itemList').innerHTML = list;

    const remove = document.querySelectorAll('.close');
    for (let i = 0; i < remove.length; i++) {
        remove[i].onclick = removeItem;
    }
}

function removeItem() {
    var id = this.getAttribute('id');
    items.splice(id, 1);
    showList();
}
