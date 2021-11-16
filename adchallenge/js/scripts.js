const nav = document.getElementById("block-adchallenge-main-menu");
console.log(nav);

const lis = nav.getElementsByClassName("menu-item");
console.log(lis);

let links = [];
for (let elem of lis) {
  let e = elem.getElementsByTagName("A")[0];
  links.push(e);
}

//SECTIONS
const home = document.getElementById("block-top-content-header");

const content = document.getElementById("block-adchallenge-content");

const latestEvent = document.getElementById("block-latest-event");

const about = document.getElementById("block-about-me");

const homeOptions = { threshold: 0.5 };
const contentOptions = { threshold: 0.5 };
const latestEventOptions = { threshold: 0.5 };
const aboutOptions = { threshold: 0.6 };

const homeObserver = new IntersectionObserver(function (entries, homeObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links[0].classList.add("current");
    } else {
      links[0].classList.remove("current");
    }
  });
}, homeOptions);

const contentObserver = new IntersectionObserver(function (
  entries,
  homeObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links[1].classList.add("current");
    } else {
      links[1].classList.remove("current");
    }
  });
},
contentOptions);

const latestEventObserver = new IntersectionObserver(function (
  entries,
  homeObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links[2].classList.add("current");
    } else {
      links[2].classList.remove("current");
    }
  });
},
latestEventOptions);

const aboutObserver = new IntersectionObserver(function (
  entries,
  homeObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links[3].classList.add("current");
    } else {
      links[3].classList.remove("current");
    }
  });
},
aboutOptions);

homeObserver.observe(home);
contentObserver.observe(content);
latestEventObserver.observe(latestEvent);
aboutObserver.observe(about);
