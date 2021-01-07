let objectHash = require('object-hash');

function getItems(type, baseprice, srcTemplate) {
  const brands = ['adidas'];

  const colors = [
    'orange',
    'yellow',
    'lime',
    'green',
    'cyan',
    'blue',
    'purple',
    'magenta',
    'pink',
    'red',
  ];

  let itemArr = [];

  for (let i = 0; i <= 9; i++) {
    let item = {
      id: objectHash(`${type}_${i}`),
      type,
      price: Math.round((baseprice + Math.random() * 5) * 100) / 100,
      color: colors[i],
      imgsrc: srcTemplate.replace('BLANK', i),
    };

    itemArr.push(item);
  }

  return itemArr;
}

let sweaters = getItems(
  'sweater',
  12,
  '`${process.env.PUBLIC_URL}/images/Sweaters/Sweater_BLANK.png`'
);

let pants = getItems(
  'pants',
  14,
  '`${process.env.PUBLIC_URL}/images/Pants/Pants_BLANK.png`'
);
let shirts = getItems(
  'shirt',
  8,
  '`${process.env.PUBLIC_URL}/images/Shirts/Shirt_BLANK.png`'
);

const shopItems = [...sweaters, ...pants, ...shirts];

console.log(shopItems);
