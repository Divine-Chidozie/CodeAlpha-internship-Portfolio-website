const navHeader = document.getElementById("nav-header");
const navLogo = document.getElementById("nav-logo");
const headerMenu = document.getElementById("headerMenu");

const navListItem = document.querySelectorAll(".nav-list-item");

const menu = document.getElementById("menu");
const menuSpan = document.querySelectorAll(".menu-span");
const mobileMenu = document.getElementById("mobileMenu");

const headerMenuBackgroundColor = "oklch(49.6% 0.265 301.924)";
const navLogoColor = "white";
const headerMenuTransition = "0.3s ease-in";
const navListItemColor = "white";

function navHeaderScroll() {
  if (window.scrollY > 50) {
    headerMenu.style.backgroundColor = `${headerMenuBackgroundColor}`;
    navLogo.style.color = `${navLogoColor}`;
    headerMenu.style.transition = `${headerMenuTransition}`;
    navListItem.forEach(function (item) {
      item.style.color = "white";
    });
    menu.style.backgroundColor = `${navListItemColor}`;
  } else {
    headerMenu.style.backgroundColor = "";
    navLogo.style.color = "";
    headerMenu.style.transition = "0.3s ease-in";
    navListItem.forEach(function (item) {
      item.style.color = "";
    });
  }
}
window.addEventListener("scroll", navHeaderScroll);

menu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

const downloadResume = document.getElementById("download-resume");
const viewResume = document.getElementById("view-resume");

const resumeButton = [downloadResume, viewResume];
resumeButton.forEach((resume) => {
  resume.addEventListener("click", (e) => {
    e.preventDefault();
    alert("We are working hard to bring this feature live!");
  });
});

// document.querySelectorAll(".live-demo").addEventListener("click", liveDemo);
// document.querySelectorAll(".github").addEventListener("click", gitLink);

// function demoLink() {
//   liveDemo.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       alert("We are still working on the project, stay turned!");
//     });
//   });
// }

// function gitLink() {
//   github.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       alert("We are still working on the project, stay turned!");
//     });
//   });
// }
