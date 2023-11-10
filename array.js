let weekday = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

function show(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function showDom(element, arr) {
  document.getElementById(element).innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    document.getElementById(element).innerHTML += `<Div>${arr[i]}</Div>`;
  }
}

// showDom("array1", weekday);

// un array puede contener numeros, cadenas y hasta objetos

user = [
  { name: "rodney", lastname: "zapata", age: "48" },
  { name: "cecilia", lastname: "cantillo", age: "35" },
];

for (let e of user) {
  console.log(`nombre: ${e.name} Apellido: ${e.lastname}`);
}

console.log("----recorrido con ForEcah ------");
weekday.forEach((elem) => console.log(elem));
