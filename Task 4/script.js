/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const outputEl = document.getElementById("output");

// fetch data
function getData(from) {
  return fetch(from)
    .then((resp) => resp.json())
    .catch((err) => console.warn("Error in getData()", err));
}

// get users from endpoint
function getCars() {
  return getData(`${ENDPOINT}`).then((data) => data);
}

getCars().then((cars) => {
  cars.forEach((brand) => {
    console.log("brand ===", brand);
    const brandCardEl = document.createElement("div");
    brandCardEl.className = "card";
    outputEl.append(brandCardEl);
    const brandNameEl = document.createElement("h2");
    brandNameEl.textContent = brand.brand;
    const modelListEl = document.createElement("ul");
    brandCardEl.append(brandNameEl, modelListEl);
    brand.models.forEach((model) => {
      const modelEl = document.createElement("li");
      modelEl.textContent = model;
      modelListEl.append(modelEl);
    });
  });
});
