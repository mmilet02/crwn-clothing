import { createSelector } from "reselect";

const selecetCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selecetCategoryReducer],
  (categoriesSice) => categoriesSice.categories
);
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
