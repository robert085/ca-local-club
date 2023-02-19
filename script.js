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
  let calcPosition = position / 4;
  console.log('real position: ', position);
  console.log('calc. position: ', calcPosition);
  heading.style.transform = `translateY(-${calcPosition}px)`
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


