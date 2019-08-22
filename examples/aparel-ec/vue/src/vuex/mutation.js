// Mutation
import MUTATIONTYPE from "./mutaitonTypes";
import { selectCategoryMutation } from "./mutations/Category";
import { selectBrandMutation } from "./mutations/Brand";

export default {
  [MUTATIONTYPE.SELECT_CATEGORY]: selectCategoryMutation,
  [MUTATIONTYPE.SELECT_BRAND]: selectBrandMutation
};
