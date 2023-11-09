const user = {
  name: "rodney",
  lastname: "zapata",
  age: 48,
};

// function printInfo(user) {
//   return "el usuario es : " + user.name;
// }

// function printInfo({ name }) {
//   return "el usuario es : " + name;
// }

function printInfo(user) {
  const { name, age } = user;
  console.log(name);
  console.log(age);
  return "<h1> el usuario es : " + name + "</h1>";
}

console.log(printInfo(user));
document.body.innerHTML = printInfo(user);
