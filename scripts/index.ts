export {};
let addSection = document.getElementsByClassName("add");
let listan = document.querySelector("ul");

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
  list.items.forEach((element) => {
    console.log(element);
    let li = document.createElement("li");
    li.innerHTML = `<input type = "checkbox" id = "Li${element}"> <label for = "Li${element}">${element}</label>`;
    listan?.appendChild(li);
  });
}

let btn = document.createElement("button");
btn.innerHTML = "add";
btn?.addEventListener("click", () => {
  listitems.push(input!.value);
  printList();
  input!.value = "";
});

let input = document.createElement("input");
input.type = "text";

addSection[0]?.appendChild(btn);
addSection[0]?.appendChild(input);

function clearList() {
  list.items = [];
  console.log(list);
}
