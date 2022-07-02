import { useContext } from "react";
import { CategoriesContext } from "../../context/categories";
import CategoryPreview from "../../components/category-preview/category-preview";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categoriesMap[title]}
        ></CategoryPreview>
      ))}
    </>
  );
};

export default CategoriesPreview;
