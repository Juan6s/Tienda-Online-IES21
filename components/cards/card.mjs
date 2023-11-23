import { saveItem } from "../../services/shopStorage.mjs";

export function card(cards, htmlComponent) {
  let html = "";

  for (const card of cards) {
    html += createCard(card);
  }

  htmlComponent.insertAdjacentHTML(
    "beforeend",
    `
    <section class="p-5">
      <div class="row row-cols-1 row-cols-md-2 g-4 mt-2">
          ${html}
      </div>    
     </section> 
      `
  );

  cards.forEach((card) => {
    htmlComponent
      .querySelector(`#add-${card.id}`)
      .addEventListener("click", () => {
        document.querySelector(`#count-${card.id}`).innerText =
          parseInt(document.querySelector(`#count-${card.id}`).innerText) + 1;
      });
    htmlComponent
      .querySelector(`#decrease-${card.id}`)
      .addEventListener("click", () => {
        if (
          parseInt(document.querySelector(`#count-${card.id}`).innerText) > 0
        ) {
          document.querySelector(`#count-${card.id}`).innerText =
            parseInt(document.querySelector(`#count-${card.id}`).innerText) - 1;
        }
      });
    htmlComponent
      .querySelector(`#shop-${card.id}`)
      .addEventListener("click", () => {
        const counter = document.querySelector(`#count-${card.id}`);

        const cuantity = parseInt(counter.innerText);

        if (cuantity <= 0) {
          return;
        }
        saveItem({
          id: card.id,
          price: card.price,
          title: card.title,
          amount: parseInt(counter.innerText),
        });

        counter.innerText = 0;
      });
  });
}

function createCard({ imagePath, title, description, price, id }) {
  let count = 0;

  return `
  <div class="col p-4"> 
    <div class="card shadow">
    <img
    class="card-img-top"
    src="${imagePath}"
    alt="..."
    width="50px"
    />
    <div class="card-body">
    <h5 class="card-title">${title.toUpperCase()}</h5>
    <p class="card-text">${description}
    </p>
    <p class="card-text">$${price}
    </p>
    <div class="btn-group" role="group" aria-label="cantidad">
        <button type="button" id="decrease-${id}" class="btn btn-shop btn-danger">-</button>
        <button type="button" id="count-${id}"class="btn btn-shop btn-warning">${count}</button>
        <button type="button" id="add-${id}"class="btn btn-shop btn-success">+</button>
    </div>
    <button type="button" id="shop-${id}"class="btn btn-secondary">
      Add
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
      </svg>
    </button>
    </div>
    </div>
</div>`;
}
