import React from "react";

function Product({ product }) {
  return (
    <div className="product">
      <div>
        <img src={product.image} alt="" />
      </div>
      <div>
        <p>{product.title}</p>
      </div>
    </div>
  );
}

export default Product;
