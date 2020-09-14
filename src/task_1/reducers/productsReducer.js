import { initialState } from "./initialState";

export const productReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case "REMOVE_ITEM": {
      return {
        productList: [
          ...state.productList.filter(
            (product) => product.id !== action.payload
          ),
        ],
      };
    }
    case "CHANGE_ITEM": {
      return {
        productList: [
          ...state.productList.map((product) =>
            product.id === action.id
              ? { ...product, [action.name]: action.value }
              : product
          ),
        ],
      };
    }
    case "ADD_ITEM": {
      return {
        ...state,
        productList: [...state.productList, action.item],
        newProduct: {
          ...state.newProduct,
          name: "",
          category: "",
          price: "",
          residue: "",
        },
      };
    }
    case "HANDLE_INPUT_CHANGE": {
      return {
        ...state,
        newProduct: {
          ...state.newProduct,
          ...action.payload,
        },
      };
    }
    case "TOGGLE_EDIT_INPUT": {
      return {
        productList: [
        ...state.productList.map((product) =>
            product.id === action.id
              ? { ...product, isEdit: !product.isEdit }
              : product
          ),
        ],
      };
    }
    default:
      return state;
  }
};
