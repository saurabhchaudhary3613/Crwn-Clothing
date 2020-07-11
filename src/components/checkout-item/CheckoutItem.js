import React from 'react';
import { connect } from 'react-redux';
import {
  deleteItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cartActions';
import PropTypes from 'prop-types';

import './CheckoutItem.scss';

const CheckoutItem = ({
  cartItem,
  deleteItemFromCart,
  addItem,
  removeItem,
}) => {
  const { imageUrl, name, quantity, price } = cartItem;
  console.log('deleteItemFromCart', deleteItemFromCart);
  const onDelete = () => {
    deleteItemFromCart(cartItem);
  };
  const onAddItem = () => {
    addItem(cartItem);
  };
  const onRemoveItem = () => {
    removeItem(cartItem);
  };
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={onRemoveItem}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={onAddItem}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={onDelete}>
        &#10005;
      </div>
    </div>
  );
};
CheckoutItem.propTypes = {
  deleteItemFromCart: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default connect(null, { deleteItemFromCart, addItem, removeItem })(
  CheckoutItem
);
