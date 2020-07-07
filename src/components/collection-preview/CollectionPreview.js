import React from 'react';

import CollectionItem from '../collection-item/CollectionItem';

import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem item={item} key={item.id} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
