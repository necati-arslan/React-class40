import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex headerMenu">
      <div>
        <h1>Products</h1>
      </div>
      <div>
        <Link to={`/`}>Products</Link>
        <Link to={`/favourites`}>Favourites</Link>
      </div>
    </div>
  );
}

export default Header;
