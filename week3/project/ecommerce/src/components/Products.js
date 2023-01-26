import Product from "./Product";

function Products({ products }) {
  console.log(products);
  return (
    <div className="flex products">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
}

export default Products;
