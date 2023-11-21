import { isSessionActive, saveSession } from "../../services/userStorage.mjs";

const form = document.querySelector("#loginForm");

if (isSessionActive()) {
  window.location.href = "../../private_pages/home/home.html";
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.querySelector("#floatingInput").value;
  const password = document.querySelector("#floatingPassword").value;
  const response = await fetch("../../data/user.json");
  const json = await response.json();

  json.forEach((user) => {
    if (user.username === username && user.password === password) {
      window.location.href = "../../private_pages/home/home.html";
      saveSession();
    }
  });

  form.submit();
});
