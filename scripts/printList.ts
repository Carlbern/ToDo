export {};
import { stadning, list1, lists } from "./lists.js";
import { List, ListItem } from "./types.js";

let main = document.getElementsByClassName("main");

export function printLists(lists) {
  main[0]!.innerHTML = "";
  for (let i = 0; i < lists.length; i++) {
    printList(lists[i]);
  }
}

export function printList(list: List) {
  //Creating main element section
  let lista = document.createElement("section");
  lista.className = "lista";

  //Creating listsection
  let listan = document.createElement("ul");
  listan.className = "listan";

  let title = document.createElement("h2");
  title.innerHTML = list.name;
  listan?.appendChild(title);

  list.items.forEach((element, index) => {
    let li = document.createElement("li");

    //Creating checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `Li${element.text}`;
    if (element.isChecked === true) {
      checkbox.checked = true;
    }
    //Sets isChecked to listitems on click
    checkbox.addEventListener("click", () => {
      if (element.isChecked === false) {
        element.isChecked = true;
      } else {
        element.isChecked = false;
      }
    });

    //Creating label
    let label = document.createElement("label");
    label.htmlFor = `Li${element.text}`;
    label.textContent = element.text;

    //Creating button
    let button = document.createElement("button");
    button.textContent = "x";
    button.className = "deleteBtn";
    button.addEventListener("click", () => {
      list.items.splice(index, 1);
      printLists(lists);
      console.log(list.items);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(button);
    listan?.appendChild(li);
  });
  lista.appendChild(listan);

  //BUTTONS
  let addSection = document.createElement("div");
  addSection.className = "add";

  //Creating Button
  let btn = document.createElement("button");
  btn.innerHTML = "add";
  btn?.addEventListener("click", () => {
    let item: ListItem = { text: input!.value, isChecked: false };
    list.items.push(item);
    printLists(lists);
    input!.value = "";
  });

  //Creating input textField
  let input = document.createElement("input");
  input.type = "text";
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      let item: ListItem = { text: input!.value, isChecked: false };
      list.items.push(item);
      printLists(lists);
      input!.value = "";
    }
  });

  addSection.appendChild(btn);
  addSection.appendChild(input);
  lista.appendChild(addSection);

  console.log("här");
  main[0]?.appendChild(lista);
}
