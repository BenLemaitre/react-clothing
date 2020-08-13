import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

// By default, it is not memoized due to collectionUrlParam being passed in from our collection component's
// mapStateToProps running whenever our state changes and and calling a new instance of the component
// By wrapping this function is memoize, we're saying that whenever this function gets called and
// receives collectionUrlParam, I want to memoize the return of this function
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) =>
      // Data normalization instead of "find", to optimize performances when getting a collection
      collections[collectionUrlParam]
  )
);
