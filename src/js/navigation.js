//Change active navigation item
document.querySelectorAll('.header__nav .nav__link').forEach((item, i, mass) => {
    item.addEventListener('click', function(e){
        mass.forEach(item => {
            if (item.className.includes('active')) {
                item.classList.remove('active');
            }
        });

        this.classList.add('active');
    });
});

//Make sticky navigation panel
window.onscroll = function () {
    const navigation = document.querySelector('.header__body');

    if(window.pageYOffset - 50 >= navigation.offsetTop) {
        navigation.classList.add('sticky');

    }else {
        navigation.classList.remove('sticky');
    }
};

//Opening mobile menu
document.querySelector('.header__mobile-btn').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__body').classList.toggle('show');
});



let x = window.matchMedia("(max-width: 768px)")
changeSize(x);
x.addListener(changeSize);

function changeSize(x) {
    if (x.matches) {
        document.querySelector('.header__collapse').prepend(document.querySelector('.header__nav'));
    } else {
        document.querySelector('.header__body .container .mobile-btn').before(document.querySelector('.header__nav'));
        document.querySelector('.header__body').classList.remove('show');
    }
}





