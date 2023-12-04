export async function translateDolars() {
  const response = await fetch("https://api.bluelytics.com.ar/v2/latest");
  const json = await response.json();
  return parseInt(json["blue"]["value_buy"]);
}
