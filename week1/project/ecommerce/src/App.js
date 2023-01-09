import { useState } from "react";

import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Products from "./components/Products";

import allCategories from "./all-categories.js";
import allProducts from "./all-products";

function App() {
  const [categories, setCategories] = useState(allCategories);
  const [products, setProducts] = useState(allProducts);
  const [selectedCat, setSelectedCat] = useState();

  const getProductsByCat = (category) => {
    setSelectedCat(category);
    const productsByCat = allProducts.filter(
      (product) => category === `FAKE: ${product.category}`
    );
    setProducts(productsByCat);
  };

  return (
    <div className="container">
      <Header />
      <Categories
        getProductsByCat={getProductsByCat}
        categories={categories}
        selectedCat={selectedCat}
      />
      <Products products={products} />
    </div>
  );
}

export default App;
