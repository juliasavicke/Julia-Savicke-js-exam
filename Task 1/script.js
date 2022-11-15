/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const els = {
  form: document.forms[0],
  search: document.getElementById("search"),
  submitBtn: document.getElementById("submit-btn"),
  output: document.getElementById("output"),
};

function renderHtml(lb, g, oz) {
  els.output.innerHTML = `
    <h2>${lb} lb</h2>
    <h2>${g} g</h2>
    <h2>${oz} oz</h2>
    `;
}

function convertValues(kgValue) {
  const lbValue = kgValue * 2.2046;
  const gValue = kgValue / 0.001;
  const ozValue = kgValue * 35.274;
  // render output html
  renderHtml(lbValue, gValue, ozValue);
}

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const kgValue = Number(els.search.value.trim());
  // convert kg to lb, g, oz
  convertValues(kgValue);
});
