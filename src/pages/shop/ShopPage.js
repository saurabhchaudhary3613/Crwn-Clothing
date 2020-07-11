import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CollectionPreview from '../../components/collection-preview/CollectionPreview';

const ShopPage = ({ collections }) => {
  console.log('collections', collections);
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
ShopPage.propTypes = {
  collections: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  collections: state.shop.collections,
});
export default connect(mapStateToProps)(ShopPage);
