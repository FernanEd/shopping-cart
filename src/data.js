function getItems(srcTemplate) {
  const brands = ['adidas', 'polo', 'nike'];

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

  let brandIndx = -1;
  for (let n of [...Array(30).keys()]) {
    let indxStr = n.toString();
    let relativeIndx = indxStr.slice(indxStr.length - 1);

    // Every 10 indexes, move to next brand
    if (n % 10 == 0) brandIndx++;

    let item = {
      brand: brands[brandIndx],
      color: colors[relativeIndx],
      imgsrc: srcTemplate.replace('BLANK', indxStr),
    };

    itemArr.push(item);
  }

  return itemArr;
}

let sweaters = getItems(
  `${process.env.PUBLIC_URL}/images/Sweaters/Sweater_BLANK.png`
);

let pants = getItems(`${process.env.PUBLIC_URL}/images/Pants/Pants_BLANK.png`);
let shirts = getItems(
  `${process.env.PUBLIC_URL}/images/Shirts/Shirt_BLANK.png`
);

const shopItems = { sweaters, pants, shirts };

export default shopItems;
