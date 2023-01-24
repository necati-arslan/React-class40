import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FavoritProvider } from "./Context/FavoriteContext";

import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductDeail from "./components/ProductDeail";
import Favorites from "./components/Favorites";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCat, setSelectedCat] = useState([]);

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
    getProducts();
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
    setProducts(productsByCat);
    setSelectedCat(category);
  };

  return (
    <FavoritProvider>
      <Router>
        <div className="container">
          <Header />
          <Categories
            getProductsByCat={getProductsByCat}
            categories={categories}
            selectedCat={selectedCat}
          />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {products.length > 0 ? (
                    <Products products={products} />
                  ) : (
                    "Loading....."
                  )}
                </>
              }
            />
            <Route path="/product/:id" element={<ProductDeail />} />
            <Route
              path="/favourites"
              element={<Favorites products={products} />}
            />
          </Routes>
        </div>
      </Router>
    </FavoritProvider>
  );
}

export default App;
