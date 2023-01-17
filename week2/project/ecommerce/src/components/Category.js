import React from "react";

function Category({ category, getProductsByCat, selectedCat }) {
  return (
    <div
      className={`category ${selectedCat === category && "activeCat"}`}
      onClick={() => getProductsByCat(category)}
    >
      {category}
    </div>
  );
}

export default Category;
