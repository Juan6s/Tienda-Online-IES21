import { deleteItem, getAllItems } from "../../services/shopStorage.mjs";

export function list(shoppingList, htmlComponent) {
  let html = "";

  if (!shoppingList) {
    htmlComponent.innerHTML = `
        <h1>El carrito de compras esta vacio!</h1>
      `;

    return;
  }

  shoppingList.forEach((item, index) => {
    html += createList(item, index);
  });

  htmlComponent.innerHTML = `
    <table class="table">
        <thead>
        <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        ${html}
        </tbody>
    </table>
  `;

  shoppingList.forEach((item, index) => {
    const deleteButton = document.querySelector(`#delete-${index}`);
    deleteButton.addEventListener("click", () => {
      deleteItem(item.id, item.amount);
      list(getAllItems(), htmlComponent);
    });
  });
}

function createList(item, index) {
  return ` <tr>
    <th scope="row">${item.title}</th>
    <td>$${item.price}</td>
    <td>${item.amount}</td>
    <td>$${item.price * item.amount}</td>
    <td><button id="delete-${index}" type="button" class="btn btn-danger"">Borrar</button></td>
  </tr>`;
}
