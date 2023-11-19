import { card } from "../../../components/cards/card.mjs";


async function getProducts(){
  const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
  const json = await response.json()
  return json.map((product)=>{
    return {
      imagePath: product.image,
      description: product.description,
      price: product.price,
      title: product.title,
    }
  })
}

async function main(){
  const products = await getProducts()
  document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    card(products)
  );
}
main()