import {
  deleteItem,
  getAllItems,
  deleteAll,
} from "../../services/shopStorage.mjs";

export function list(shoppingList, htmlComponent) {
  let html = "";

  if (!shoppingList) {
    htmlComponent.innerHTML = `
    <h1 class="text-center mt-2">
    El Carrito esta vacio!
  </h1>
      `;

    return;
  }

  shoppingList.forEach((item, index) => {
    html += createList(item, index);
  });

  htmlComponent.innerHTML = `
  <div class="m-1 p-2 shadow">
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
    <button id="clearShopping" type="button" class="btn btn-danger ml-1 mb-2"">Borrar carrito</button>
    </div>

    <div class="m-5 p-5 shadow">
    <form class="">
    <h4 class="mb-3">Datos de pago</h4>
    <div class="d-block my-3">
      <div class="custom-control custom-radio">
        <input
          id="credit"
          name="paymentMethod"
          type="radio"
          class="custom-control-input"
          checked=""
          required=""
        />
        <label class="custom-control-label" for="credit">Tarjeta de credito</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          id="debit"
          name="paymentMethod"
          type="radio"
          class="custom-control-input"
          required=""
        />
        <label class="custom-control-label" for="debit">Tarjeta debito</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          id="paypal"
          name="paymentMethod"
          type="radio"
          class="custom-control-input"
          required=""
        />
        <label class="custom-control-label" for="paypal">Mercado Pago</label>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="cc-name">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="cc-name"
          placeholder=""
          required=""
        />
        <small class="text-muted">El nombre completo como sale en la tarjeta</small>
        <div class="invalid-feedback">El nombre es requerido</div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="cc-number">Numero de tarjeta</label>
        <input
          type="text"
          class="form-control"
          id="cc-number"
          placeholder=""
          required=""
        />
        <div class="invalid-feedback">Se requiere este campo</div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 mb-3">
        <label for="cc-expiration">Vencimiento</label>
        <input
          type="text"
          class="form-control"
          id="cc-expiration"
          placeholder=""
          required=""
        />
        <div class="invalid-feedback">Vencimiento requerido</div>
      </div>
      <div class="col-md-3 mb-3">
        <label for="cc-cvv">CVV</label>
        <input
          type="text"
          class="form-control"
          id="cc-cvv"
          placeholder=""
          required=""
        />
        <div class="invalid-feedback">Security code required</div>
      </div>
    </div>
    <hr class="mb-4" />
    <button class="btn btn-primary btn-lg btn-block" type="submit">
      Completar el pago
    </button>
  </form>
  </div>

  `;
  document.querySelector("#clearShopping").addEventListener("click", () => {
    deleteAll();
    list(getAllItems(), htmlComponent);
  });

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
