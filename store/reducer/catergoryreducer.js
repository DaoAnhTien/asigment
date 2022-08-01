import Catergory from "../../models/Catergory";
import {
  DELETE_CATEGORY,
  INSERT_CATEGORY,
  UPDATE_CATEGORY,
} from "../actions/catergoryaction";

const initalstate = {
  categories: [new Catergory(1, "Hat"), new Catergory(2, "shoes")],
};
export default (state = initalstate, action) => {
  const { type, category } = action;
  switch (type) {
    case INSERT_CATEGORY:
      return { ...state, categories: [...state.categories, category] };
    case DELETE_CATEGORY:
      const { categoryId } = action;
      console.log(categoryId);
      const fillteredcategories = state.categories.filter(
        (item) => item.categoryId !== categoryId
      );
      return { ...state, categories: [...fillteredcategories] };
    case UPDATE_CATEGORY:
      const filteredcates = state.categories.filter(
        (item) => item.categoryId !== category.categoryId
      );
      return { ...state, categories: [...filteredcates, category] };

    default:
      return state;
  }
};
