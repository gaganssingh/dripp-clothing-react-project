import "./CollectionItem.styles.scss";

import React from "react";
import CustomButton from "../CustomButton/CustomButton";

export default function CollectionItem(props) {
  const { name, price, imageUrl } = props;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted>Add To Cart</CustomButton>
    </div>
  );
}
