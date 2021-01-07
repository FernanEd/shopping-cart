import { Link } from 'react-router-dom';

export default function ShopNav({ changeTab }) {
  return (
    <nav>
      <ul>
        <li id="sweater" onClick={changeTab}>
          Sweaters
        </li>

        <li id="shirt" onClick={changeTab}>
          Shirts
        </li>

        <li id="pants" onClick={changeTab}>
          Pants
        </li>
      </ul>
    </nav>
  );
}
