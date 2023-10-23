import { card } from "./components/cards/card.mjs";

document.querySelector("body").innerHTML = card([
  {
    imagePath: "./private_pages/categories/example.jpg",
    description: "Esto es una descripcion",
    price: 200,
    title: "Esto es un titulo",
  },

  {
    imagePath: "./private_pages/categories/example.jpg",
    description: "Esto es una descripcion",
    price: 200,
    title: "Esto es un titulo",
  },

  {
    imagePath: "./private_pages/categories/example.jpg",
    description: "Esto es una descripcion",
    price: 200,
    title: "Esto es un titulo",
  },
]);
