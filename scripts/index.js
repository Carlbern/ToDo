var _a, _b;
let addSection = document.getElementsByClassName("add");
let listan = document.querySelector("ul");
var listitems = ["Diska", "Dammsuga", "Skrubba"];
var list = { name: "Städning", items: listitems };
printList();
console.log(list);
function printList() {
    listan.innerHTML = "";
    listan.innerHTML = list.name;
    list.items.forEach((element) => {
        console.log(element);
        let li = document.createElement("li");
        li.innerHTML = `<input type = "checkbox" id = "Li${element}"> <label for = "Li${element}">${element}</label>`;
        listan === null || listan === void 0 ? void 0 : listan.appendChild(li);
    });
}
let btn = document.createElement("button");
btn.innerHTML = "add";
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    listitems.push(input.value);
    printList();
    input.value = "";
});
let input = document.createElement("input");
input.type = "text";
(_a = addSection[0]) === null || _a === void 0 ? void 0 : _a.appendChild(btn);
(_b = addSection[0]) === null || _b === void 0 ? void 0 : _b.appendChild(input);
function clearList() {
    list.items = [];
    console.log(list);
}
export {};
