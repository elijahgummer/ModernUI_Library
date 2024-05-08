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

// NAVBAR RESPONSIVE CODE

const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
};
cancelBtn.onclick = () => {
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};
