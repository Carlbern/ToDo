export {};
import { List, ListItem } from "./types.js";
export var listitems = [
  { text: "Dammsuga", isChecked: false },
  { text: "Diska", isChecked: false },
  { text: "Skrubba toaletten", isChecked: false },
];

export var list: List = { name: "Städning", items: listitems };
