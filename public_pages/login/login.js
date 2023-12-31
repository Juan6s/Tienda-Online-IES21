import {
  isSessionActive,
  saveSession,
} from "../../services/storage/userStorage.mjs";

import { login } from "../../services/userService.mjs";

const form = document.querySelector("#loginForm");

if (isSessionActive()) {
  window.location.href = "../../private_pages/home/home.html";
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.querySelector("#floatingInput").value;
  const password = document.querySelector("#floatingPassword").value;
  if (await login({ username, password })) {
    saveSession();
    window.location.href = "../../private_pages/home/home.html";
  }

  form.submit();
});
