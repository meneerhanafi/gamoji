/*NAVIGATION*/
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
    document.body.classList.toggle('nav-open');
});

/*FADE IN WHILE SCROLLING*/
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.25,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});