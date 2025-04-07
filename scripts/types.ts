export {};
export type List = {
  name: string;
  items: ListItem[];
};

export type ListItem = {
  text: string;
  isChecked: boolean;
};
