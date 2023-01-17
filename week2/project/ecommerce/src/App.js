import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCat, setSelectedCat] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCats = async () => {
      const allCats = await fetchCat();
      setCategories(allCats);
    };
    getCats();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const allProducts = await fetchProducts();
      setProducts(allProducts);
    };
    setLoading(true);
    getProducts();
    setLoading(false);
  }, []);

  const fetchCat = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    console.log(data);

    return data;
  };

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);

    return data;
  };

  const fetchProductsByCat = async (category) => {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  };

  const getProductsByCat = async (category) => {
    const productsByCat = await fetchProductsByCat(category);
    setLoading(true);
    setProducts(productsByCat);
    setSelectedCat(category);
    setLoading(false);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Categories
          getProductsByCat={getProductsByCat}
          categories={categories}
          selectedCat={selectedCat}
        />
        {loading ? <p>Loading..</p> : <p></p>}

        <Products products={products} />
      </div>
    </Router>
  );
}

export default App;
