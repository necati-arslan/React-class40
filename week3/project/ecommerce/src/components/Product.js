import { Link } from "react-router-dom";
import unFavoriteHeart from "../assets/heart-regular.svg";
import favoriteHeart from "../assets/heart-solid.svg";

import {
  useIsFavorite,
  useAddFavorite,
  useRemoveFavorite,
} from "../Context/FavoriteContext";

function Product({ product }) {
  const isFavorite = useIsFavorite();
  const addFavorite = useAddFavorite();
  const removeFavorite = useRemoveFavorite();

  return (
    <div className="product">
      <div>
        <div className="iconHeart">
          {isFavorite(product.id) ? (
            <img
              src={favoriteHeart}
              alt={favoriteHeart}
              onClick={() => removeFavorite(product.id)}
            />
          ) : (
            <img
              src={unFavoriteHeart}
              alt={unFavoriteHeart}
              onClick={() => addFavorite(product.id)}
            />
          )}
        </div>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt="" />
        </Link>
      </div>
      <div>
        <p>{product.title}</p>
      </div>
    </div>
  );
}

export default Product;
