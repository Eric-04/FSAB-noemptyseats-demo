import React from 'react';
import '../styles/ItemList.css';
import Item from './Item'

export default function ItemList() {
  return (
    <div className = "itemlist">
        <Item idx="01" title="SEASON 1" image="https://www.shutterstock.com/image-vector/lost-items-line-vector-icon-260nw-1436787446.jpg" 
        text="Lorem ipsum dolor sit amet consectetuer adipiscing elit, sed do elusmod tempor incidunt ut labore el dolore"
        link="#item1"> </Item>
        <Item idx="02" title="WRISTBANDS" image="https://www.shutterstock.com/image-vector/lost-items-line-vector-icon-260nw-1436787446.jpg" 
        text="Lorem ipsum dolor sit amet consectetuer adipiscing elit, sed do elusmod tempor incidunt ut labore el dolore"
        link="#item1"> </Item>
        <Item idx="03" title="STICKERS" image="https://www.shutterstock.com/image-vector/lost-items-line-vector-icon-260nw-1436787446.jpg" 
        text="Lorem ipsum dolor sit amet consectetuer adipiscing elit, sed do elusmod tempor incidunt ut labore el dolore"
        link="#item1"> </Item>
    </div>
  );
}
