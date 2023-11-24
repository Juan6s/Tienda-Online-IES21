import { navbar } from "../components/navbar/index.mjs";
import { closeSession } from "../services/userStorage.mjs";

const options = [
  {
    isDropwdown: false,
    id: "navbar_home",
    header: "Home",
    active: true,
    href: "/private_pages/home/home.html",
  },
  {
    isDropwdown: true,
    header: "Categorias",
    options: [
      {
        id: "navbar_headsets",
        header: "Ropa de hombre",
        href: "/private_pages/categories/headsets/headsets.html",
      },
      {
        id: "navbar_bags",
        header: "Joyeria",
        href: "/private_pages/categories/bags/bags.html",
      },
      {
        id: "navbar_accessories",
        header: "Electronica",
        href: "/private_pages/categories/accesories/accessories.html",
      },
    ],
  },
  {
    isDropwdown: false,
    id: "navbar_Carrito",
    header: "Carrito",
    active: false,
    href: "/private_pages/shop/shop.html",
  },
];

document
  .querySelector("body")
  .insertAdjacentHTML("afterbegin", navbar(options));

document
  .querySelector("footer")
  .insertAdjacentHTML(
    "beforeend",
    `<p>&copy; 2023 Tienda de Aeronautica "El aguila"</p>`
  );

const logout = document.querySelector("#logout");

logout.addEventListener("click", (e) => {
  closeSession();
  window.location.href = "/public_pages/login/login.html";
});
