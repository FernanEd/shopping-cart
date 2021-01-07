import { Link } from 'react-router-dom';

export default function ShopNav({ changeTab }) {
  return (
    <nav>
      <ul>
        <li id="sweaters" onClick={changeTab}>
          Sweaters
        </li>

        <li id="shirts" onClick={changeTab}>
          Shirts
        </li>

        <li id="pants" onClick={changeTab}>
          Pants
        </li>
      </ul>
    </nav>
  );
}
