function getItems(srcTemplate) {
  const brands = [
    'adidas',
    'lacoste',
    'polo',
    'supreme',
    'boss',
    'channel',
    'converse',
    'nike',
    'hollister',
  ];

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
  for (let n of [...Array(90).keys()]) {
    //10 to 99
    let indx = n + 10;
    let indxStr = indx.toString();
    // Get the unit of the current index
    let relativeIndx = indxStr.slice(indxStr.length - 1);

    // Every 10 indexes, move to next brand
    if (indx % 10 == 0) brandIndx++;

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
