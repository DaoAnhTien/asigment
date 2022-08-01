import Catergory from "../../models/Catergory";

export const INSERT_CATEGORY = "INSERTCATEGORY";
export const DELETE_CATEGORY = "DELETECATEGORY";
export const UPDATE_CATEGORY = "UPDATECATEGORY";

export const insertCategory = (categoryId, name) => {
  const category = new Catergory(categoryId, name);
  return {
    type: INSERT_CATEGORY,
    category: category,
  };
};

export const updateCategory = (categoryId, name) => {
  const category = new Catergory(categoryId, name);
  return {
    type: UPDATE_CATEGORY,
    category: category,
  };
};
export const deleteCategory = (categoryId) => {
  return {
    type: DELETE_CATEGORY,
    categoryId: categoryId,
  };
};
