const generateCard = dataObj => {
  const cardContainer = document.getElementById("cards-container");

  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = dataObj.image;

  const h3 = document.createElement("h3");
  h3.innerText = dataObj.title;

  const p = document.createElement("p");
  p.innerText = dataObj.description;

  const cardBtn = document.createElement("button");
  cardBtn.classList.add("card-btn");
  cardBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/></svg>`;
  cardBtn.onclick = function (e) {
    // currentTarget ritorna SEMPRE il PROPRIETARIO DELL'EVENTO a prescindere da dove clicchiamo
    // nel caso di elemento con figli, il target potrebbe ritornarci gli elementi interni se cliccati
    console.log("card btn target", e.currentTarget);

    e.currentTarget.closest(".card").remove(); // partendo dal bottone cliccato (currentTarget), andiamo a cercare verso l'esterno il primo elemento che corrisponde alla classe .card e lo rimuoviamo
  };

  card.append(img, h3, p, cardBtn);
  cardContainer.appendChild(card);
};

const form = document.querySelector("form");

// form.onsubmit = function(e){ e.preventDefault() }
form.addEventListener("submit", function (e) {
  // il from di default refresha la pagina, vogliamo prevenire questo comportamento!
  e.preventDefault(); // dimenticare questo passaggio non vi farà funzionare NIENTE!
  console.log("form event", e);

  // creo un oggetto che mi raggruppa i dati raccolti dai singoli campi input che selezionerò dal DOM

  const inputImageNode = document.getElementById("image");
  const inputTitleNode = document.getElementById("title");
  const inputDescNode = document.getElementById("description");

  console.dir(inputDescNode);
  console.log(inputDescNode.value);

  const myData = {
    image: inputImageNode.value, // ora troviamo la stringa contenuta nel .value del nodo
    title: inputTitleNode.value, // ora troviamo la stringa contenuta nel .value del nodo
    description: inputDescNode.value // ora troviamo la stringa contenuta nel .value del nodo
  };

  console.log("ABBIAMO I SUOI DATI SIGNORE: ", myData);
  generateCard(myData);

  e.target.reset();
});

const confirmAndReset = e => {
  const hasUserConfirmed = confirm("sei sicuro di voler eliminare i dati del form?");
  if (hasUserConfirmed) {
    e.target.parentNode.reset();
  }
};

const loneInput = document.getElementById("lone-input");
// change parte quando l'utente preme Enter o quando preme fuori, quindi al "blur" del campo (quando clicchiamo altrove e l'input perde la selezione)
loneInput.onchange = function (e) {
  console.log("change event", e);
};

// l'evento input parte ad ogni pressione del tasto, non registra Enter o altri tasti speciali
// loneInput.oninput = function (e) {
//   console.log("input event", e);
// };

// l'evento onkeyup partirà quando l'utente rilascia il tasto
// loneInput.onkeyup = function (e) {
//   console.log("on key up event", e);
// };
