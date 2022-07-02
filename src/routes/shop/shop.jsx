import { Route, Routes } from "react-router-dom";
import "./shop.scss";
import CategoriesPreview from "../category-preview/categories-preview";
import Category from "../category/category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
      <Route path=":category" element={<Category></Category>}></Route>
    </Routes>
  );
};

export default Shop;
