import { Link } from 'react-router-dom';

export default function ShopNav({ changeTab }) {
  return (
    <nav className="tab-nav">
      <ul className="tab-ul">
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
