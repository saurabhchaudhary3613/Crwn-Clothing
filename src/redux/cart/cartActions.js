import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  DELETE_ITEM_FROM_CART,
  REMOVE_ITEM,
} from '../types';

// export const toggleCartHidden = () => ({
//   type: TOGGLE_CART_HIDDEN,
// });

export const toggleCartHidden = () => (dispatch) => {
  dispatch({
    type: TOGGLE_CART_HIDDEN,
  });
};

export const addItem = (item) => (dispatch) => {
  dispatch({
    type: ADD_ITEM,
    payload: item,
  });
};

export const deleteItemFromCart = (item) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM_FROM_CART,
    payload: item,
  });
};

export const removeItem = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_ITEM,
    payload: item,
  });
};
