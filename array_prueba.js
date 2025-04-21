user = [
  { name: "rodney", lastname: "zapata", age: "48" },
  { name: "cecilia", lastname: "cantillo", age: "35" },
];

for (let e of user) {
  console.log(`nombre: ${e.name} Apellido: ${e.lastname}`);
}

let weekday = [
  "monday",
  "twesday",
  "wenesday",
  "thusday",
  "friday",
  "saturday",
];
for (day of weekday) {
  console.log(`day of week is ${day}`);
}
weekday.forEach((elem) => console.log(elem));

let precioPc = 1500000;
const mostrarPrecio = () => console.log(`el precio es ${precioPc}`);
mostrarPrecio();
