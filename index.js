function hello(x, y) {
  //   console.log("hola mundo");
  if (y === undefined) {
    y = 0;
  }

  return x + y;
}

const user = {
  name: "rodney",
  lastname: "zapata",
  adrees: {
    country: "colombia",
    city: "Barranquilla",
    street: "murillo",
  },
  friends: ["james", "marco", "leo"],
  sendMail() {
    return "email send ..";
  },
};

console.log(user.friends);

const name = "rodney";
const age = 48;

const newUser = {
  name: name,
  age: age,
};

console.log(newUser);
