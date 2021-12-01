import React, { Component } from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview.jsx";
import SHOP_DATA from "./shop.data.js";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((collection) => (
          <CollectionPreview key={collection.id} {...collection} />
        ))}
      </div>
    );
  }
}
