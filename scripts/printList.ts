export {};
import { listitems, list } from "./lists.js";
import { List, ListItem } from "./types.js";

let addSection = document.getElementsByClassName("add");

let listan = document.querySelector("ul");
export function printList(list) {
  listan!.innerHTML = "";
  let title = document.createElement("h2");
  title.innerHTML = list.name;
  listan?.appendChild(title);

  list.items.forEach((element, index) => {
    console.log(element);
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
      printList(list);
      console.log(list.items);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(button);
    listan?.appendChild(li);
  });
}

//Creating Button
let btn = document.createElement("button");
btn.innerHTML = "add";
btn?.addEventListener("click", () => {
  let item: ListItem = { text: input!.value, isChecked: false };
  listitems.push(item);
  printList(list);
  input!.value = "";
});

//Creating input textField
let input = document.createElement("input");
input.type = "text";
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let item: ListItem = { text: input!.value, isChecked: false };
    listitems.push(item);
    printList(list);
    input!.value = "";
  }
});
addSection[0]?.appendChild(btn);
addSection[0]?.appendChild(input);
