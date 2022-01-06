// mobile menu

const burgerEl = document.querySelector("#burger");
const navbarMenuEl = document.querySelector("#nav-links");

burgerEl.addEventListener("click", () => {
    navbarMenuEl.classList.toggle('is-active');
});

//tab
const tabEls = document.querySelectorAll('.tabs li');
const tabContentEls = document.querySelectorAll('#tab-content>div');

tabEls.forEach((tab) => {
    tab.addEventListener('click', () => {
        // 移除活動模式
        tabEls.forEach(item => item.classList.remove('is-active'));
        tab.classList.add('is-active');
        // 判斷顯示哪個內容
        const target = tab.dataset.target;
        tabContentEls.forEach(box => {
            if (box.getAttribute('id') == target) {
                box.classList.remove('is-hidden');
            } else {
                box.classList.add('is-hidden');
            }
        });
    });
});


// modal
const signupEl = document.querySelector('#signup');
const modalBgEl = document.querySelector('.modal-background');
const modalEl = document.querySelector('.modal');

signupEl.addEventListener('click', () => {
    modalEl.classList.add('is-active');
});

modalBgEl.addEventListener('click', () => {
    modalEl.classList.remove('is-active');
});