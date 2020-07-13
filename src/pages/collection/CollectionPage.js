import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCollectionById } from '../../redux/shop/shopActions';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './CollectionPage.scss';

const CollectionPage = ({
  match,
  getCollectionById,
  collection: { title, items },
}) => {
  console.log('title', title);
  console.log('items', items);

  useEffect(() => {
    getCollectionById(match.params.collectionId);

    //eslint-disable-next-line
  }, []);

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items ? (
          items.map((item) => <CollectionItem key={item.id} item={item} />)
        ) : (
          <p>No item ...</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collection: state.shop.collectionById,
});
export default connect(mapStateToProps, { getCollectionById })(CollectionPage);
