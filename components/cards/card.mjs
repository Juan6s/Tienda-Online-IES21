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

  cards.forEach(card => {
    
    htmlComponent.querySelector(`#add-${card.id}`).addEventListener("click", ()=>{
      document.querySelector(`#count-${card.id}`).innerText = parseInt(document.querySelector(`#count-${card.id}`).innerText) + 1
    })
    htmlComponent.querySelector(`#decrease-${card.id}`).addEventListener("click", ()=>{
      if(parseInt(document.querySelector(`#count-${card.id}`).innerText) > 0){
        document.querySelector(`#count-${card.id}`).innerText = parseInt(document.querySelector(`#count-${card.id}`).innerText) - 1
      }
    })
    
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
    </div>
    </div>
</div>`;
}
