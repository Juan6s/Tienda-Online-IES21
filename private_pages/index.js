import { navbar } from "../components/navbar/index.mjs";

const options = [
  {
    isDropwdown: false,
    id: "navbar_home",
    header: "Home",
    active: true,
    onClick: "myFunction()",
  },
  {
    isDropwdown: false,
    id: "navbar_login",
    header: "Login",
    active: false,
    onClick: "myFunction()",
  },
  {
    isDropwdown: false,
    id: "navbar_signup",
    header: "Signup",
    active: false,
    onClick: "myFunction()",
  },
  {
    isDropwdown: true,
    header: "Categorias",
    options: [
      { id: "navbar_headsets", header: "Headsets" },
      { id: "navbar_bags", header: "Bags" },
      { id: "navbar_accessories", header: "Accesorios" },
    ],
  },
];

document
  .querySelector("body")
  .insertAdjacentHTML("afterbegin", navbar(options));

const homeButton = document.querySelector("#navbar_home");
const loginButton = document.querySelector("#navbar_login");
const signupButton = document.querySelector("#navbar_signup");
const headsetsButton = document.querySelector("#navbar_headsets");
const bagsButton = document.querySelector("#navbar_bags");
const accesoriesButton = document.querySelector("#navbar_accessories");
const logoutButton = document.querySelector("#logout");

homeButton.addEventListener("click", () => {
  window.location.href = "/private_pages/home/home.html";
});
loginButton.addEventListener("click", () => {
  window.location = "/public_pages/login/login.html";
});
signupButton.addEventListener("click", () => {
  window.location = "/public_pages/signup/sign-up.html";
});
headsetsButton.addEventListener("click", () => {
  window.location = "/private_pages/categories/headsets/headsets.html";
});
bagsButton.addEventListener("click", () => {
  window.location = "/private_pages/categories/bags/bags.html";
});
accesoriesButton.addEventListener("click", () => {
  window.location = "/private_pages/categories/accesories/accessories.html";
});
logoutButton.addEventListener("click", () => {
  window.location = "/public_pages/login/login.html";
});
