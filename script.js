
let informationWindow1 = document.getElementById('informationWindow1');
let informationWindow2 = document.getElementById('informationWindow2');
let informationWindow3 = document.getElementById('informationWindow3');
let informationWindow4 = document.getElementById('informationWindow4');
let informationWindow5 = document.getElementById('informationWindow5');
let informationWindow6 = document.getElementById('informationWindow6');
let informationWindow7 = document.getElementById('informationWindow7');
let informationWindow8 = document.getElementById('informationWindow8');
let informationWindow9 = document.getElementById('informationWindow9');
let informationWindow10 = document.getElementById('informationWindow10');
let informationWindow11 = document.getElementById('informationWindow11');
let informationWindow12 = document.getElementById('informationWindow12');
let informationWindow13 = document.getElementById('informationWindow13');
let informationWindow14 = document.getElementById('informationWindow14');

let teleport = document.getElementById('teleport');

let body = document.getElementById('body');

let playerInsight = 0;

document.getElementById("button").addEventListener('click', openWindow);

function openWindow1() {
    gsap.from(informationWindow1, {opacity: 0, duration: 0.5});
    informationWindow1.classList.toggle("openWindow");
    body.classList.toggle("galleryBlur");
}

function openWindow2() {
    gsap.from(informationWindow2, {opacity: 0, duration: 0.5});
    informationWindow2.classList.toggle("openWindow");
    body.classList.toggle("galleryBlur");
}

function openWindow3() {
    gsap.from(informationWindow3, {opacity: 0, duration: 0.5});
    informationWindow3.classList.toggle("openWindow");
    body.classList.toggle("galleryBlur");
}

function openWindow4() {
    gsap.from(informationWindow4, {opacity: 0, duration: 0.5});
    informationWindow4.classList.toggle("openWindow");
    body.classList.toggle("galleryBlur");
}

function openWindow5() {
    gsap.from(informationWindow5, {opacity: 0, duration: 0.5});
    informationWindow5.classList.toggle("openWindow");
    body.classList.toggle("galleryBlur");
}

function openWindow6() {
    gsap.from(informationWindow6, {opacity: 0, duration: 0.5});
    informationWindow6.classList.toggle("openWindow");
    body.classList.toggle("galleryBlur");
}

function openWindow7() {
    gsap.from(informationWindow7, {opacity: 0, duration: 0.5});
    informationWindow7.classList.toggle("openWindow");
    body.classList.toggle("galleryBlur");
}

function openWindow8() {
    gsap.from(informationWindow8, {opacity: 0, duration: 0.5});
    informationWindow8.classList.toggle("openWindow");
    body.classList.toggle("galleryBlur");
}

function openWindow9() {
    gsap.from(informationWindow9, {opacity: 0, duration: 0.5});
    informationWindow9.classList.toggle("openWindow");
    body.classList.toggle("galleryBlur");
}

function openWindow10() {
    gsap.from(informationWindow10, {opacity: 0, duration: 0.5});
    informationWindow10.classList.toggle("openWindow");
    body.classList.toggle("galleryBlur");
}

function openWindow11() {
    gsap.from(informationWindow11, {opacity: 0, duration: 0.5});
    informationWindow11.classList.toggle("openWindow");
    body.classList.toggle("galleryBlur");
}


function openWindow12() {
    gsap.from(informationWindow12, {opacity: 0, duration: 0.5});
    informationWindow12.classList.toggle("openWindow");
    body.classList.toggle("galleryBlur");
}

function openWindow13() {
    gsap.from(informationWindow13, {opacity: 0, duration: 0.5});
    informationWindow13.classList.toggle("openWindow");
    body.classList.toggle("galleryBlur");
}

function openWindow14() {
    gsap.from(informationWindow14, {opacity: 0, duration: 0.5});
    informationWindow14.classList.toggle("openWindow");
    body.classList.toggle("galleryBlur");
}

function addInsight() 
{
    playerInsight += 1;
    if (playerInsight == 7)
        console.log("you are reaching closer");
    if (playerInsight == 14)
        teleport.classList.toggle("hideBody");
}

function teleportPlayer() {
    window.location.href = "twineStory/promise.html"
}