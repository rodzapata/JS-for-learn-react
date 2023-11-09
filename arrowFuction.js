const welcome = () => {
  console.log("welcome everyone");
};
welcome();

const welcome2 = () => console.log("second welcome en sin las llaves");
welcome2();

const welcome3 = (name) => console.log(`hola : ${name}`);
welcome3("rodney");

const suma = (x, y) => "resultado es " + (x + y);
console.log(suma(2, 3));

const severalLines = () => {
  console.log("one line");
  console.log("two line");
  console.log("three line");
};

severalLines();

const weekday = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

weekday.forEach((el, index) => console.log(`${el} es: ${index}`));
