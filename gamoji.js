const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
    document.body.classList.toggle('nav-open');
});