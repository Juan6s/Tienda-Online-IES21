import { card } from "../../../components/cards/card.mjs";


async function getProducts(){
  const response = await fetch("https://fakestoreapi.com/products/category/men's clothing")
  const json = await response.json()
  return json.map((product)=>{
    return {
      imagePath: product.image,
      description: product.description,
      price: product.price,
      title: product.title,
      id: product.id,
    }
  })
}

async function main(){
  const products = await getProducts()
  const body = document.querySelector("body")
  card(products, body)

}
main()