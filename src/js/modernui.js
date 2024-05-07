// modernui.js

//Modal
document.addEventListener('DOMContentLoaded', function () {
    var modalTrigger = document.getElementById('modalTrigger');
    var modal = document.getElementById('myModal');
    var modalClose = document.getElementsByClassName('modal-close')[0];

    modalTrigger.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    modalClose.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
