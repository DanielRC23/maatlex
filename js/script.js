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


let deferredPrompt;

const installBtn =
document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {

e.preventDefault();

deferredPrompt = e;

installBtn.style.display = 'inline-block';

});

installBtn.addEventListener('click', async () => {

if(!deferredPrompt) return;

deferredPrompt.prompt();

const choice =
await deferredPrompt.userChoice;

deferredPrompt = null;

});