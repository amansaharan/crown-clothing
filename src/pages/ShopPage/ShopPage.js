import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

export class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      sections: SHOP_DATA
    };
  }
  render() {
    const { sections } = this.state;
    return (
      <div>
        {sections.map(({ id, ...otherProps }) => {
          return <CollectionPreview key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
