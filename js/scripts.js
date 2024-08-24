const mobileBtn = document.getElementById('mobile-cta'),
    nav = document.querySelector('nav'),
    mobileBtnExit = document.getElementById('mobile-menu-exit'),
    ddSearchBar = document.querySelector('.dd-searchbar'),
    searchHeader = document.getElementById('mobile-dd-search');



    
mobileBtn.addEventListener ('click', () => {
    nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener ('click', () => {
    nav.classList.remove('menu-btn');
})

searchHeader.addEventListener('click', () => { 
    ddSearchBar.classList.toggle('visible');
})