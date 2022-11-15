/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const els = {
  btn__element: document.getElementById("btn__element"),
  btn__state: document.getElementById("btn__state"),
};
let counter = 0;
els.btn__element.addEventListener("click", () => {
  counter++;
  els.btn__state.innerHTML = counter;
});
