const handleButtonClickFromAttribute = function (e) {
  // l'event è un oggetto che racchiude molte informazioni relative al proprietario dell'evento, ovvero quello su cui è definito l'evento
  console.log("Bottone cliccato, attributo di evento triggerato!");
  // vado a leggere l'event object che mi verrà passato dall'evento quando chiamerà la funzione...
  console.log("questo è l'event object della funzione handleButtonClickFromAttribute", e);

  // trovo il riferimento al BOTTONE CLICCATO
  const btn = e.target;
  btn.style.backgroundColor = "red"; // e.target.style.backgroundColor = "red"

  console.log("testo del bottone", e.target.innerText);
};

const btn2 = document.getElementById("second-btn");
console.dir(btn2);

const handleButtonClickFromNodeProperty = function (e) {
  console.log("Bottone 2 cliccato, evento da proprietà di oggetto triggerato!");

  console.log("questo è l'event object della funzione handleButtonClickFromNodeProperty", e);

  console.log("BTN2", btn2);
  console.log("BTN2 ev", e.target);
};

// !!! ATTENZIONE !!! utilizzare le parentesi tonde in questo contesto (di assegnazione di proprietà di evento) fa eseguire la funzione IMMEDIATAMENTE
// NON ASPETTERA' il click dell'utente, quindi totalmente inutile e dannoso...

// btn2.onclick = handleButtonClickFromNodeProperty(); // questa è un esecuzione  e torna undefined, l'evento onclick si troverà undefined all'interno quando proverà ad avviarsi
btn2.onclick = handleButtonClickFromNodeProperty; // questa invece è una reference, un riferimento alla funzione in memoria
// in questo modo stiamo semplicemente indicando all'evento click quale funzione andare ad eseguire quando il momento sarà opportuno (cioè al click e non prima!)

// le funzioni usate nel contesto degli eventi si definiscono EVENT LISTENERS, perché stanno in ascolto e in attesa di venire chiamate IN UN SECONDO MOMENTO
// gli event listeners POSSONO ricevere un dato, un oggetto, dal loro parametro
const btn5 = document.getElementById("fifth-btn");

const evListenerWithCustomParam = function (e, customParam) {
  console.log("target", e.target);
  console.log("custom parameter", customParam);
};

btn5.onclick = function (e) {
  evListenerWithCustomParam(e, 10);
};

const handleButtonClickFromAddEventListener = function (e) {
  console.log("prima funzione da handleButtonClickFromAddEventListener()");
  console.log("questo è l'event object della funzione handleButtonClickFromAddEventListener()", e);
};

// metodo .addEventListener()
const btn3 = document.getElementById("third-btn");
btn3.addEventListener("click", handleButtonClickFromAddEventListener);
btn3.addEventListener("click", function (e) {
  console.log("seconda funzione per btn3", e);
});
