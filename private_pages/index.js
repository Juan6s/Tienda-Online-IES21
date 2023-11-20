import { navbar } from "../components/navbar/index.mjs";

const options = [
  {
    isDropwdown: false,
    id: "navbar_home",
    header: "Home",
    active: true,
    onClick: "myFunction()",
    href: '/private_pages/home/home.html'
  },
  {
    isDropwdown: false,
    id: "navbar_login",
    header: "Login",
    active: false,
    onClick: "myFunction()",
    href: '/public_pages/login/login.html'
  },
  {
    isDropwdown: false,
    id: "navbar_signup",
    header: "Signup",
    active: false,
    onClick: "myFunction()",
    href: '/public_pages/signup/sign-up.html'
  },
  {
    isDropwdown: true,
    header: "Categorias",
    options: [
      { id: "navbar_headsets", header: "Ropa de hombre", href: '/private_pages/categories/headsets/headsets.html'},
      { id: "navbar_bags", header: "Joyeria" , href:'/private_pages/categories/bags/bags.html'},
      { id: "navbar_accessories", header: "Electronica", href:'/private_pages/categories/accesories/accessories.html' },
    ],
  },
];

document
  .querySelector("body")
  .insertAdjacentHTML("afterbegin", navbar(options));

