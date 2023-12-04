import { card } from "../../../components/cards/card.mjs";
import { translateCategory } from "../../services/categoryTranslater.mjs";
import { translateDolars } from "../../services/exchangeTranslater.mjs";

async function getProducts(category) {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const json = await response.json();
  const dolar = await translateDolars();
  return json.map((product) => {
    return {
      imagePath: product.image,
      description: product.description,
      price: product.price * dolar,
      title: product.title,
      id: product.id,
    };
  });
}

async function main() {
  const url_string = window.location.href;
  const url = new URL(url_string);

  const category = url.searchParams.get("category");
  document.querySelector("#title").innerText = translateCategory(category);

  const products = await getProducts(category);
  const body = document.querySelector("#container");
  card(products, body);
}
main();
