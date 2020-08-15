import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  CollectionItemTitle,
  PreviewContainer,
} from "./collection-preview.style";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionItemTitle>{title.toUpperCase()}</CollectionItemTitle>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
