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

//

showDom("array1", weekday);
