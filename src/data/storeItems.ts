export type StoreItem = {
  id: number;
  name: string;
  price: number;
  stock: number;
  inCart: number;
};

const storeItems: Array<StoreItem> = [
  {
    id: 1,
    name: "beetroot",
    price: 0.45,
    stock: 10,
    inCart: 0,
  },
  {
    id: 2,
    name: "carrot",
    price: 0.15,
    stock: 2,
    inCart: 0,
  },
  {
    id: 3,
    name: "apple",
    price: 0.25,
    stock: 3,
    inCart: 0,
  },
  {
    id: 4,
    name: "apricot",
    price: 0.55,
    stock: 4,
    inCart: 0,
  },
  {
    id: 5,
    name: "avocado",
    price: 0.85,
    stock: 1,
    inCart: 0,
  },
  {
    id: 6,
    name: "bananas",
    price: 0.25,
    stock: 8,
    inCart: 0,
  },
  {
    id: 7,
    name: "bell-pepper",
    price: 0.35,
    stock: 4,
    inCart: 0,
  },
  {
    id: 8,
    name: "berry",
    price: 0.25,
    stock: 3,
    inCart: 0,
  },
  {
    id: 9,
    name: "blueberry",
    price: 0.5,
    stock: 9,
    inCart: 0,
  },
  {
    id: 10,
    name: "eggplant",
    price: 0.45,
    stock: 1,
    inCart: 0,
  },
];

export default storeItems;
