const coffee = document.querySelector(".coffee");
const lines = document.querySelector(".lines");
const dance = document.querySelector("#dance");
const hamburger = document.querySelector(".ocean");
const slider = document.querySelector(".slider");

const tl = new TimelineMax();

tl.fromTo(coffee, 1, { height: "0%" }, { height: "80%", ease: Power1.easeInOut })
tl.fromTo(coffee, 2, { width: "0%" }, { width: "70%", ease: Power1.easeInOut })
tl.fromTo(slider, 2, { x: "-100%" }, { width: "0%", ease: Power1.easeInOut }, "-=2");



