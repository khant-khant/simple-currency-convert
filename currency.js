const userInput = document.querySelector("#userInput");
const currenciesEl = document.querySelector(".currencies");
let mmkResult = "";
let bahtResult = "";
let yenResult = "";

let currencyRates = {
  mmk: 1851.26,
  baht: 36.07,
  yen: 135.78,
};
let currencyCountries = ["mmk", "baht", "yen"];

function convert() {
  const value = userInput.value;
  console.log("convert", userInput.value);
  mmkResult = value * currencyRates.mmk;
  bahtResult = value * currencyRates.baht;
  yenResult = value * currencyRates.yen;
  let results = [mmkResult, bahtResult, yenResult];
  let title = ['Myanmar Kyats', 'Thai Baht', 'Japanese Yen']
  let totalDOM = "";
  for (let i = 0; i < currencyCountries.length; i++) {
    const totalDiv = document.createElement("div");
    totalDiv.classList.add("total");
    const titleP = document.createElement("p");
    titleP.classList.add("title");
    titleP.textContent = title[i];
    totalDiv.appendChild(titleP);
    const valueP = document.createElement("p");
    valueP.classList.add("value");
    valueP.textContent = results[i];

    totalDiv.appendChild(valueP);
    currenciesEl.appendChild(totalDiv);
  }
}
