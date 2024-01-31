const form = document.querySelector("form");

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
});
