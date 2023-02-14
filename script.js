'use strict';
console.log(`Hi there 🖐😃 It's working`);

const hero = document.querySelector('.hero');
const heading = document.querySelector('.heading');

const toggleVisibility = function () {
  heading.classList.contains('hidden')
    ? heading.classList.remove('hidden')
        : heading.classList.add('hidden');
};

let position = 0;

document.addEventListener('scroll', (event) => {
  position = window.scrollY;
  console.log(position);
  heading.style.transform = `translateY(-${position}px)`
});



const callback = function (entries) {
    const [iO] = entries;
  
};

const options = {
  root: null,
  threshold: [0.5],
};

const observer = new IntersectionObserver(callback, options);

observer.observe(hero);


