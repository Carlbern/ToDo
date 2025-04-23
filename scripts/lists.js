var stadning = [
    { text: "Dammsuga", isChecked: false },
    { text: "Diska", isChecked: false },
    { text: "Skrubba toaletten", isChecked: false },
];
var handling = [
    { text: "Mjölk", isChecked: false },
    { text: "Smör", isChecked: false },
    { text: "Pasta", isChecked: false },
];
var programsprak = [
    { text: "Java", isChecked: false },
    { text: "Python", isChecked: false },
    { text: "TypeScript", isChecked: false },
    { text: "JavaScript", isChecked: false },
    { text: "C#", isChecked: false },
    { text: "C++", isChecked: false },
];
export var list1 = { name: "Städning", items: stadning };
export var list2 = { name: "Mathandel", items: handling };
export var list3 = {
    name: "Programmeringsspråk att lära mig",
    items: programsprak,
};
export var lists = [list1, list2, list3];
export var listContainer = [
    { name: "mainContainer", lists: lists },
];
