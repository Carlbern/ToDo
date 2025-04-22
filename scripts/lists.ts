export {};
import { List, ListContainer, ListItem } from "./types.js";

export var stadning: ListItem[] = [
  { text: "Dammsuga", isChecked: false },
  { text: "Diska", isChecked: false },
  { text: "Skrubba toaletten", isChecked: false },
];
export var handling: ListItem[] = [
  { text: "Mjölk", isChecked: false },
  { text: "Smör", isChecked: false },
  { text: "Pasta", isChecked: false },
];

export var list1: List = { name: "Städning", items: stadning };
export var list2: List = { name: "Mathandel", items: handling };

export var lists: List[] = [list1, list2];

export var listContainer: ListContainer[] = [
  { name: "mainContainer", lists: lists },
];
