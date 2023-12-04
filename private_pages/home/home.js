import { card } from "../../../components/cards/card.mjs";
import { translateDolars } from "../../services/exchangeTranslater.mjs";

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
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
  const products = await getProducts();
  const body = document.querySelector("#container");
  card(products, body);
}
main();
