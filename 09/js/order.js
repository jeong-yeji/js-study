const check = document.getElementById('shippingInfo');
check.addEventListener('click', function () {
    if (check.checked) {
        document.getElementById('shippingName').value = document.getElementById('billingName').value;
        document.getElementById('shippingTel').value = document.getElementById('billingTel').value;
        document.getElementById('shippingAddr').value = document.getElementById('billingAddr').value;
    } else {
        document.getElementById('shippingName').value = '';
        document.getElementById('shippingTel').value = '';
        document.getElementById('shippingAddr').value = '';
    }
});
