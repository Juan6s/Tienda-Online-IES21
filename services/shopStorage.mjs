export function saveItem(itemUser) {
  const shopList = localStorage.getItem("shop");

  const parsedList = JSON.parse(shopList);

  let items = [];
  if (parsedList) {
    for (const item of parsedList) {
      items.push(item);
    }
  }

  items.push(itemUser);

  localStorage.setItem("shop", JSON.stringify(items));
}

export function deleteItem(itemID, amount) {
  const shopList = localStorage.getItem("shop");
  const parsedList = JSON.parse(shopList);
  let items = [];
  for (const item of parsedList) {
    if (item.id !== itemID || item.amount !== amount) {
      items.push(item);
      console.log("ACAAAAA");
    }
  }
  if (items.length === 0) {
    localStorage.removeItem("shop");
    return;
  }
  localStorage.setItem("shop", JSON.stringify(items));
}

export function deleteAll() {
  localStorage.clear();
}

export function getAllItems() {
  const shopList = localStorage.getItem("shop");
  return JSON.parse(shopList);
}
