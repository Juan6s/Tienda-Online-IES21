import { navbar } from "./components/navbar/index.mjs";

const options = [
  {
    isDropwdown: false,
    href: "",
    header: "Home",
    active: true,
    onClick: "myFunction()",
  },
  {
    isDropwdown: false,
    href: "",
    header: "Login",
    active: false,
    onClick: "myFunction()",
  },
  {
    isDropwdown: false,
    href: "../signup.html",
    header: "Signup",
    active: false,
    onClick: "myFunction()",
  },
  {
    isDropwdown: true,
    header: "Categorias",
    options: [
      { href: "../headset.html", header: "Headsets" },
      { href: "../Bags.html", header: "Bags" },
      { href: "../accessories.html", header: "Accessories" },
    ],
  },
];

function myFunction() {
  console.log("AQUI");
}

document.querySelector("body").innerHTML = navbar(options);
