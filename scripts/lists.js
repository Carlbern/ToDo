export var stadning = [
    { text: "Dammsuga", isChecked: false },
    { text: "Diska", isChecked: false },
    { text: "Skrubba toaletten", isChecked: false },
];
export var handling = [
    { text: "Mjölk", isChecked: false },
    { text: "Smör", isChecked: false },
    { text: "Pasta", isChecked: false },
];
export var list1 = { name: "Städning", items: stadning };
export var list2 = { name: "Mathandel", items: handling };
export var lists = [list1, list2];
export var listContainer = [
    { name: "mainContainer", lists: lists },
];
