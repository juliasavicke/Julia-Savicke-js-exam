/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const outputEl = document.getElementById("output");
const btnEn = document.getElementById("btn");

// button event listener
btnEn.addEventListener("click", () => {
  getUsers().then((users) => {
    // clear output message
    outputEl.innerHTML = "";
    users.forEach((user) => {
      console.log(user);
      renderHtml(user);
    });
  });
});

// fetch data
function getData(from) {
  return fetch(from)
    .then((resp) => resp.json())
    .catch((err) => console.warn("Error in getData()", err));
}

// get users from endpoint
function getUsers() {
  return getData(`${ENDPOINT}`).then((data) => data);
}

// render html
function renderHtml(user) {
  const userCard = document.createElement("div");
  userCard.className = "card";
  const loginH2El = document.createElement("h2");
  loginH2El.textContent = `User: ${user.login}`;
  const imageEl = document.createElement("img");
  imageEl.src = user.avatar_url;
  outputEl.append(userCard);
  userCard.append(loginH2El, imageEl);
}
