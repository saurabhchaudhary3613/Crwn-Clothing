import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import './CheckoutPage.scss';

const CheckoutPage = ({ cartItems, dispatch }) => {
  console.log('dispatch', dispatch);
  const total = cartItems.reduce(
    (acumalatedQuantity, cartItem) =>
      acumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>Product</div>
        <div className='header-block'>Description</div>
        <div className='header-block'>Price</div>
        <div className='header-block'>Remove</div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <div className='total'>
        <span>Total: ${total}</span>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});
export default connect(mapStateToProps)(CheckoutPage);
