export {};
let addSection = document.getElementsByClassName("add");
let listan = document.querySelector("ul");
const deleteBtn = document.querySelectorAll(".deleteBtn");

type List = {
  name: string;
  items: string[];
};

var listitems = ["Diska", "Dammsuga", "Skrubba"];
var list: List = { name: "Städning", items: listitems };

printList();
console.log(list);

function printList() {
  listan!.innerHTML = "";
  listan!.innerHTML = list.name;
  list.items.forEach((element, index) => {
    console.log(element);
    let li = document.createElement("li");
    li.innerHTML = `<input type = "checkbox" id = "Li${element}"> 
    <label for = "Li${element}">${element}</label>
    <button class="deleteBtn">x</button>`;
    listan?.appendChild(li);
  });
}

deleteBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    const index = (event.target as HTMLElement).getAttribute("data-index");
    if (index !== null) {
      deleteItem(parseInt(index));
    }
  });
});

//Creating Button
let btn = document.createElement("button");
btn.innerHTML = "add";
btn?.addEventListener("click", () => {
  listitems.push(input!.value);
  printList();
  input!.value = "";
});

//Creating textField
let input = document.createElement("input");
input.type = "text";
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    listitems.push(input!.value);
    printList();
    input!.value = "";
  }
});
addSection[0]?.appendChild(btn);
addSection[0]?.appendChild(input);

function clearList() {
  list.items = [];
  console.log(list);
}

function deleteItem(index: number) {
  list.items.splice(index, 1);
  printList();
  console.log(list.items);
}
