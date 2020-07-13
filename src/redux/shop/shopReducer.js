import SHOP_DATA from './shop.data';
import { GET_COLLECTION_BY_ID } from '../types';

const INITIAL_STATE = {
  collections: Object.keys(SHOP_DATA).map((key) => SHOP_DATA[key]),
  collectionById: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COLLECTION_BY_ID:
      return {
        ...state,
        collectionById: state.collections.find(
          (collection) => collection.id === action.payload
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;
