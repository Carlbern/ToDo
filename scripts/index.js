var _a, _b;
let addSection = document.getElementsByClassName("add");
let listan = document.querySelector("ul");
const deleteBtn = document.querySelectorAll(".deleteBtn");
var listitems = ["Diska", "Dammsuga", "Skrubba"];
var list = { name: "Städning", items: listitems };
printList();
console.log(list);
function printList() {
    listan.innerHTML = "";
    listan.innerHTML = list.name;
    list.items.forEach((element, index) => {
        console.log(element);
        let li = document.createElement("li");
        li.innerHTML = `<input type = "checkbox" id = "Li${element}"> 
    <label for = "Li${element}">${element}</label>
    <button class="deleteBtn">x</button>`;
        listan === null || listan === void 0 ? void 0 : listan.appendChild(li);
    });
}
deleteBtn.forEach((button) => {
    button.addEventListener("click", (event) => {
        const index = event.target.getAttribute("data-index");
        if (index !== null) {
            deleteItem(parseInt(index));
        }
    });
});
//Creating Button
let btn = document.createElement("button");
btn.innerHTML = "add";
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    listitems.push(input.value);
    printList();
    input.value = "";
});
//Creating textField
let input = document.createElement("input");
input.type = "text";
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        listitems.push(input.value);
        printList();
        input.value = "";
    }
});
(_a = addSection[0]) === null || _a === void 0 ? void 0 : _a.appendChild(btn);
(_b = addSection[0]) === null || _b === void 0 ? void 0 : _b.appendChild(input);
function clearList() {
    list.items = [];
    console.log(list);
}
function deleteItem(index) {
    list.items.splice(index, 1);
    printList();
    console.log(list.items);
}
export {};
