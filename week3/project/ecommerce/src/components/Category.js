import React from "react";
import { Link } from "react-router-dom";

function Category({ category, getProductsByCat, selectedCat }) {
  return (
    <Link to={"/"}>
      <div
        className={`category ${selectedCat === category && "activeCat"}`}
        onClick={() => getProductsByCat(category)}
      >
        {category}
      </div>
    </Link>
  );
}

export default Category;
