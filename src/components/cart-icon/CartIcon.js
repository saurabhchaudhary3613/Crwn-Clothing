import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import PropTypes from 'prop-types';

import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, cartItems }) => {
  const itemCount = cartItems.reduce(
    (acumalatedQuantity, cartItem) => acumalatedQuantity + cartItem.quantity,
    0
  );

  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'> {itemCount}</span>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });
//export default connect(null, mapDispatchToProps)(CartIcon);

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func.isRequired,
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
