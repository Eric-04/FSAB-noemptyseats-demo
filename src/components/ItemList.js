import React from 'react';
import '../styles/ItemList.css';
import Item from './Item'

export default function ItemList() {
  return (
    <div className = "itemlist">
        <Item idx="01" title="SEASON 1" image='https://noemptyseats.org/cdn/shop/files/blueneck.heic?v=1702417776&width=990' 
        text="Lorem ipsum dolor sit amet consectetuer adipiscing elit, sed do elusmod tempor incidunt ut labore el dolore"
        link="#item1"> </Item>
        <Item idx="02" title="WRISTBANDS" image='https://noemptyseats.org/cdn/shop/files/IMG_4230.heic?v=1690921694&width=533' 
        text="Lorem ipsum dolor sit amet consectetuer adipiscing elit, sed do elusmod tempor incidunt ut labore el dolore"
        link="#item1"> </Item>
        <Item idx="03" title="STICKERS" image='https://noemptyseats.org/cdn/shop/files/IMG_3268.heic?v=1686795342&width=533' 
        text="Lorem ipsum dolor sit amet consectetuer adipiscing elit, sed do elusmod tempor incidunt ut labore el dolore"
        link="#item1"> </Item>
    </div>
  );
}
