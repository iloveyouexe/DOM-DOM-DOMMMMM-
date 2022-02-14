window.onload = () => {
  let body = document.body;
  let container = document.createElement("div");
  container.className = "container";

  let numberOfBoxes = 0;

  let addSquareButton = document.createElement("button");

  addSquareButton.innerText = "Add Sqaure";

  addSquareButton.addEventListener("click", () => {
    numberOfBoxes++;

    let div = document.createElement("div");
    console.log(div.id);

    div.className = "box";

    div.id = numberOfBoxes;

    container.appendChild(div);

    div.addEventListener("mouseover", () => {
      div.innerText = div.id;
    });
    div.addEventListener("mouseout", () => {
      div.innerText = "";
    });

    let colorArray = ["Black", "Green", "Red", "Yellow", "Orange", "Purple"];

    div.addEventListener("click", () => {
      div.style.backgroundColor =
        colorArray[Math.floor(Math.random() * colorArray.length)];
    });

    div.addEventListener("dblclick", () => {
      if (div.id % 2 == 0) {
        if (div.nextSibling) {
          div.nextSibling.remove();
        } else {
          alert("There is nothing after this square");
        }
      } else {
        if (div.previousSibling) {
          div.previousSibling.remove();
        } else {
          alert("There is nothing before this square");
        }
      }
    });
  });

  body.appendChild(addSquareButton);
  body.appendChild(container);
};
