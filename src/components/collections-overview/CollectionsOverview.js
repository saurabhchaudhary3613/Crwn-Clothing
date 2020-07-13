import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CollectionPreview from '../collection-preview/CollectionPreview';

import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
CollectionsOverview.propTypes = {
  collections: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  collections: state.shop.collections,
});
export default connect(mapStateToProps)(CollectionsOverview);
