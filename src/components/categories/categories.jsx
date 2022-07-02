import DirectoryItem from "../directory-item/directory-item";
import "./categories.scss";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <DirectoryItem key={category.id} category={category}></DirectoryItem>
        );
      })}
    </div>
  );
};

export default Categories;
