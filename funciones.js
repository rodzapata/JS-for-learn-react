const user = {
  name: "rodney",
  age: 48,
};

console.log(printInfo(user));

function printInfo(user) {
  const { name, age } = user;
  return `<h2> usuario : ${name} y  edad: ${age} </h2>`;
}

console.log(printInfo(user));
// document.body.innerHTML = printInfo(user);

const funcionExpresada = function () {
  console.log("funcione expresada o anonima");
};

funcionExpresada();

//llamar una funcion dentro de otra funcion
let fn = () => {
  console.log("prueba de funcion anonima");
};

fn();

function some(f) {
  console.log("algo antes de la funcion");
  fn();
  console.log("algo despues de la fucnion");
}

some();
