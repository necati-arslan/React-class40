import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="product">
      <Link to={`/product/${product.id}`}>
        <div>
          <img src={product.image} alt="" />
        </div>
        <div>
          <p>{product.title}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
