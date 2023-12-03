export async function login({ username, password }) {
  const response = await fetch("../../data/user.json");
  const json = await response.json();
  console.log(response);
  for (const user of json) {
    console.log(user);
    if (user.username === username && user.password === password) {
      console.log("ACAAA");
      return true;
    }
  }
  return false;
}
export async function signUp({ username, password }) {
  if ((username !== "", password !== "")) {
    return true;
  }
}
