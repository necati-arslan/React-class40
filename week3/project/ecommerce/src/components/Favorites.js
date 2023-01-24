import React from "react";
import Product from "./Product";
import { useFavorite } from "../Context/FavoriteContext";

function Favorites({ products }) {
  const { favorite } = useFavorite();

  console.log(favorite);
  return (
    <div className="flex products">
      {products.map(
        (product, index) =>
          favorite.includes(product.id) && (
            <Product key={index} product={product} />
          )
      )}
    </div>
  );
}

export default Favorites;
