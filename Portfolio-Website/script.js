const navHeader = document.getElementById("nav-header");
const navLogo = document.getElementById("nav-logo");
const headerMenu = document.getElementById("headerMenu");

const navListItem = document.querySelectorAll(".nav-list-item");

const menu = document.getElementById("menu");
const menuSpan = document.querySelectorAll(".menu-span");
const mobileMenu = document.getElementById("mobileMenu");

const liveDemoLink1 = document.getElementById("live-demo-link-1");
const liveDemoLink2 = document.getElementById("live-demo-link-2");
const githubLink1 = document.getElementById("github-link-1");
const githubLink2 = document.getElementById("github-link-2");

const liveLink = [liveDemoLink1, liveDemoLink2, githubLink1, githubLink2];
liveLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    alert("We are working on this feature, stay with us.");
  });
});

// Form Input
const form = document.getElementById("form");

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const textAreaInput = document.querySelector("#textarea-input");

// Form Error
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const textareaError = document.getElementById("textareaError");

menu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

// const downloadResume = document.getElementById("download-resume");
const viewResume = document.getElementById("view-resume");

// downloadResume,
const resumeButton = [viewResume];
resumeButton.forEach((resume) => {
  resume.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Resume will be available for view soon, stay with us.");
  });
});

const isValid = false;

nameInput.textContent = "";
emailInput.textContent = "";
textAreaInput.textContent = "";

const nameMessage = "Please enter your name";
const emailMessage = "Please enter a valid email address";
const teaxtAreaMessage = "Provide us with a Message";
const secondTextAreaMessage = "Message must be more than 10 characters long";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameInput.value.trim() === "") {
    nameError.textContent = `${nameMessage}`;
    return isValid;
  }

  if (!emailInput.value.trim()) {
    emailError.textContent = emailMessage;
    return isValid;
  }

  if (textAreaInput.value.trim() === "") {
    textareaError.textContent = teaxtAreaMessage;
  } else if (textAreaInput.value.trim().length <= 10) {
    textareaError.textContent = secondTextAreaMessage;
  }

  if (!isValid) {
  }
});

function clearNameError() {
  nameError.textContent = "";
}

function clearEmailError() {
  emailError.textContent = "";
}

const clearTextAreaError = () => {
  textareaError.textContent = "";
};

nameInput.addEventListener("input", clearNameError);
emailInput.addEventListener("input", clearEmailError);
textAreaInput.addEventListener("input", clearTextAreaError);

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
