import Category from "./Category";
const Categories = ({ categories, getProductsByCat, selectedCat }) => {
  return (
    <div className="flex categories">
      {categories.map((category, index) => (
        <Category
          key={index}
          category={category}
          getProductsByCat={getProductsByCat}
          selectedCat={selectedCat}
        />
      ))}
    </div>
  );
};

export default Categories;
