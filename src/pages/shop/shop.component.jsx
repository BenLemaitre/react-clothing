import React from "react";

import collections from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./shop.style.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionsProps }) => (
          <CollectionPreview key={id} {...collectionsProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
