import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/CustomButton';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import CartItem from '../cart-item/CartItem';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  console.log('dispatch=', dispatch);
  console.log('history=', history);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length !== 0 ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty.</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
