const username = document.querySelector("#floatingInput").text;
import {
  isSessionActive,
  saveSession,
} from "../../services/storage/userStorage.mjs";

import { signUp } from "../../services/userService.mjs";

const form = document.querySelector("#signupForm");

if (isSessionActive()) {
  window.location.href = "../../private_pages/home/home.html";
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.querySelector("#floatingInput").value;
  if (await signUp({ username, password: 1 })) {
    saveSession();
    window.location.href = "../../private_pages/home/home.html";
  }

  form.submit();
});
