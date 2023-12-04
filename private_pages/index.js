import { navbar } from "../components/navbar/index.mjs";
import { translateCategory } from "../services/categoryTranslater.mjs";
import { closeSession } from "../services/storage/userStorage.mjs";
import { isSessionActive } from "../../services/storage/userStorage.mjs";

if (!isSessionActive()) {
  window.location.href = "../../public_pages/login/login.html";
}

async function main() {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await response.json();
  console.log(categories);

  const mappedCategories = categories.map((category) => {
    return {
      id: `navbar_${category}`,
      header: translateCategory(category),
      href: `/private_pages/categories/categories.html?category=${category}`,
    };
  });
  console.log(mappedCategories);
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
      options: mappedCategories,
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
    .querySelector("footer")
    .insertAdjacentHTML(
      "beforeend",
      `<p>&copy; 2023 Tienda de Aeronautica "El aguila"</p>`
    );

  document
    .querySelector("body")
    .insertAdjacentHTML("afterbegin", navbar(options));

  const logout = document.querySelector("#logout");
  logout.addEventListener("click", (e) => {
    closeSession();
    window.location.href = "/public_pages/login/login.html";
  });
}

main();
