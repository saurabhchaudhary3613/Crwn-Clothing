import { GET_COLLECTION_BY_ID } from '../types';

export const getCollectionById = (collectionId) => {
  return {
    type: GET_COLLECTION_BY_ID,
    payload: collectionId,
  };
};
