document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  button.id = "button";
  let btnText = document.createTextNode("Add Square");
  button.appendChild(btnText);
  document.body.appendChild(button);
  let container = document.createElement("div");
  document.body.appendChild(container);
  container.id = "container";
  let counter = 0;

  button.addEventListener("click", fun);

  function fun() {
    let div = document.createElement("div");
    div.className = "div";

    console.log("ive been clicked");
    div.style.height = "150px";
    div.style.width = "150px";
    container.appendChild(div);

    div.id = [counter];
    console.log(counter);
    counter++;
  }

  let h1 = document.createElement("h1");
  h1.id = "h1";
  let h1text = document.createTextNode("ID " + [counter]);
  h1.appendChild(h1text);
  div.appendChild(h1);

  div.addEventListener("click", funn);

  function funn() {
    let color = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "purple",
      "black",
      "brown",
    ];
    div.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
  }

  div.addEventListener("dblclick", function () {
    if (div.id % 2 == 0 && div.nextElementSibling === null) {
      alert("There isnt a square to remove after the clicked square");
    } else if (div.id % 2 == 0) {
      square.nextElementSibling.remove();
    } else if (div.previousElementSibling === null) {
      alert("There isnt a square to remove before the clicked square");
    } else {
      div.previousElementSibling.remove();
    }
  });
});
