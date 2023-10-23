export function card(cards) {
  let html = "";

  for (const card of cards) {
    html += createCard(card);
  }

  return `
  <section class="p-5">
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-2">
        ${html}
    </div>    
   </section> 
    `;
}

function createCard({ imagePath, title, description, price }) {
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
        <button type="button" class="btn btn-danger">-</button>
        <button type="button" class="btn btn-warning">${count}</button>
        <button type="button" class="btn btn-success">+</button>
    </div>
    </div>
    </div>
</div>`;
}
