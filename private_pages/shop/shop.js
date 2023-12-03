import { list } from "../../components/list/shoppingList.mjs";
import { getAllItems } from "../../services/storage/shopStorage.mjs";

const body = document.querySelector("#container");
body.innerHTML;
list(getAllItems(), body);
