let items = [
  {
    id: 'a8483e11cf5a320e6d9d9f793014d58c363c8976',
    name: 'Yellow sweater',
    price: 14.32,
  },
  {
    id: 'a65b9b7a300e08dcc08c78a5a04f3338915bce1c',
    name: 'Lime sweater',
    price: 16.57,
  },
  {
    id: 'a65b9b7a300e08dcc08c78a5a04f3338915bce1c',
    name: 'Lime sweater',
    price: 16.57,
  },
];

let newItems = [
  {
    id: 'a8483e11cf5a320e6d9d9f793014d58c363c8976',
    name: 'Yellow sweater',
    price: 14.32,
    quantity: 1,
  },
  {
    id: 'a65b9b7a300e08dcc08c78a5a04f3338915bce1c',
    name: 'Lime sweater',
    price: 16.57,
    quantity: 2,
  },
];

function clearArray(shopItems) {
  const count = {};

  for (let item of shopItems) {
    count.hasOwnProperty(item.id)
      ? (count[item.id] += 1)
      : (count[item.id] = 1);
  }

  return count;
}

console.log(clearArray(items));
