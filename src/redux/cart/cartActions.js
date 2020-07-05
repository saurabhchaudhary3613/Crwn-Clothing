import { TOGGLE_CART_HIDDEN } from '../types';

// export const toggleCartHidden = () => ({
//   type: TOGGLE_CART_HIDDEN,
// });

export const toggleCartHidden = () => (dispatch) => {
  dispatch({
    type: TOGGLE_CART_HIDDEN,
  });
};
