import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDeail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetcProductDetail();
  }, []);

  const fetcProductDetail = async () => {
    const productURL = `https://fakestoreapi.com/products/${id}`;

    try {
      const res = await fetch(productURL);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="products">
      <div>
        <img src={product.image} alt="" />
      </div>
      <div>
        <p>{product.title}</p>
      </div>
      <div>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDeail;
