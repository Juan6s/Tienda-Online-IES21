import { list } from "../../components/list/shoppingList.mjs";
import { getAllItems } from "../../services/shopStorage.mjs";

const body = document.querySelector("#container");
body.innerHTML;
list(getAllItems(), body);
