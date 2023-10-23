import { card } from "../../../components/cards/card.mjs";

document.querySelector("body").insertAdjacentHTML(
  "beforeend",
  card([
    {
      imagePath: "../example.jpg",
      description: "Esto es una descripcion",
      price: 200,
      title: "Esto es un titulo",
    },

    {
      imagePath: "../example.jpg",
      description: "Esto es una descripcion",
      price: 200,
      title: "Esto es un titulo",
    },

    {
      imagePath: "../example.jpg",
      description: "Esto es una descripcion",
      price: 200,
      title: "Esto es un titulo",
    },
  ])
);
