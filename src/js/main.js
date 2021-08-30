const dropDownContent = document.querySelector('.dropdown-content')
const dropDownBtn = document.querySelector('.dropbtn');

function changeDropDown() {
    dropDownContent.classList.toggle("show");
    dropDownBtn.classList.toggle("dropbtn-active");
}

dropDownBtn.addEventListener('click', changeDropDown);

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        dropDownContent.classList.remove("show");
        dropDownBtn.classList.remove("dropbtn-active");
    }
}

//chenge pages/tab

const about = document.querySelector('.about');
const portfolio = document.querySelector('.portfolio');
const mainPageBtn = document.getElementById('main');
const worksPageBtn = document.getElementById('works');

worksPageBtn.addEventListener('click', (e) => {
    e.preventDefault();

    about.classList.add('hidden');
    mainPageBtn.classList.remove('header__menu-link--active');
    worksPageBtn.classList.add('header__menu-link--active');
    portfolio.classList.remove('hidden');
});

mainPageBtn.addEventListener('click', (e) => {
    e.preventDefault();

    about.classList.remove('hidden');
    portfolio.classList.add('hidden');
    mainPageBtn.classList.add('header__menu-link--active');
    worksPageBtn.classList.remove('header__menu-link--active');
})

//slider 

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoHeight: true,
});

//modal 

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const aboutBtn = document.querySelector('.about__btn');
const modalClose = document.querySelector('.modal__close');

aboutBtn.addEventListener('click', showModal);

modalClose.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);

function showModal(e) {
    e.preventDefault();

    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');



}

function hideModal(e) {
    e.preventDefault();

    overlay.classList.add('hidden');
    modal.classList.add('hidden');

}

console.log(new Date(2021, 07, 30)+3)

