import React from 'react';
import Item from './Item';


const ItemContainer = (props) => {
  return (
    <Item 
      itemId={props.match.params.itemId}
    />
  )
}

export default ItemContainer;