gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const exit = document.getElementById("exit");
const services = document.getElementById("services");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

services.addEventListener("click", (e) => {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: ".service-list",
      offsetY: 50,
    },
    ease: "power4.out",
  });
  e.preventDefault();
});

about.addEventListener("click", (e) => {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: ".about-sec",
      offsetY: 0.5,
    },
    ease: "power4.out",
  });
  e.preventDefault();
});

contact.addEventListener("click", (e) => {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: ".booking",
      offsetY: 0.5,
    },
    ease: "power4.out",
  });
  e.preventDefault();
});

menu.addEventListener("click", function (e) {
  nav.classList.toggle("hide-mobile");
  e.preventDefault();
  gsap.from(".list", {
    scrollTrigger: {
      trigger: ".list",
      toggleActions: "restart none start reset",
    },
    duration: 2,
    x: -70,
    stagger: 0.5,
    ease: "power4.out",
    opacity: 0,
  });
});

exit.addEventListener("click", function (e) {
  nav.classList.add("hide-mobile");
  e.preventDefault();
});
