export {};
import { List, ListContainer, ListItem } from "./types.js";

var stadning: ListItem[] = [
  { text: "Dammsuga", isChecked: false },
  { text: "Diska", isChecked: false },
  { text: "Skrubba toaletten", isChecked: false },
];
var handling: ListItem[] = [
  { text: "Mjölk", isChecked: false },
  { text: "Smör", isChecked: false },
  { text: "Pasta", isChecked: false },
];
var programsprak: ListItem[] = [
  { text: "Java", isChecked: false },
  { text: "Python", isChecked: false },
  { text: "TypeScript", isChecked: false },
  { text: "JavaScript", isChecked: false },
  { text: "C#", isChecked: false },
  { text: "C++", isChecked: false },
];

export var list1: List = { name: "Städning", items: stadning };
export var list2: List = { name: "Mathandel", items: handling };
export var list3: List = {
  name: "Programmeringsspråk att lära mig",
  items: programsprak,
};

export var lists: List[] = [list1, list2, list3];

export var listContainer: ListContainer[] = [
  { name: "mainContainer", lists: lists },
];
