// const title = document.createElement("h1");
// title.innerText = "Hola mundo desde JS";

// document.body.append(title);

const button = document.createElement("button");
button.innerText = "Save";
button.addEventListener("click", function () {
  //   console.log("presionaste click");
  alert("presionaste click");
});

document.body.append(button);

console.log(title);
