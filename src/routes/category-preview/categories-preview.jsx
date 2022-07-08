import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview";
import { selectCategoriesMap } from "../../store/category/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
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
