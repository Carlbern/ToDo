export {};

export type ListContainer = {
  name: string;
  lists: List[];
};

export type List = {
  name: string;
  items: ListItem[];
};

export type ListItem = {
  text: string;
  isChecked: boolean;
};
