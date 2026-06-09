const menuBtn = document.getElementById('menu-btn');

const mobileMenu =
document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {

mobileMenu.classList.toggle('active');

});

const faqQuestions =
document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {

question.addEventListener('click', () => {

const answer =
question.nextElementSibling;

if(answer.style.maxHeight){

answer.style.maxHeight = null;

}else{

answer.style.maxHeight =
answer.scrollHeight + "px";

}

});

});


const counters = document.querySelectorAll('.counter-number');

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let current = 0;

const increment = target / 60;

const updateCounter = () => {

if(current < target){

current += increment;

counter.textContent = Math.ceil(current);

requestAnimationFrame(updateCounter);

}else{

counter.textContent = target;

}

};

updateCounter();

observer.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter => {

observer.observe(counter);

});

let deferredPrompt;

const installBtn =
document.getElementById('installBtn');

window.addEventListener(
'beforeinstallprompt',
(e) => {

e.preventDefault();

deferredPrompt = e;

installBtn.style.display = 'inline-block';

});

installBtn.addEventListener(
'click',
async () => {

if(!deferredPrompt) return;

deferredPrompt.prompt();

const result =
await deferredPrompt.userChoice;

if(result.outcome === 'accepted'){

installBtn.innerHTML = `

<svg xmlns="http://www.w3.org/2000/svg"
width="22"
height="22"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor">

<path stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="M5 13l4 4L19 7"/>

</svg>

<span>App Instalada</span>

`;

installBtn.classList.add(
'installed'
);

}

deferredPrompt = null;

});

if('serviceWorker' in navigator){

navigator.serviceWorker.register(
'/sw.js'
);

}