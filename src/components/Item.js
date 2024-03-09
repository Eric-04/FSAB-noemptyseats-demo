import React from 'react';
import '../styles/Item.css';

export default function Item(props) {
  return (
    <div className="item">
        <div className="item-header">
            <div className="idx">{props.idx}</div>
            <div className="item-title">{props.title}</div>
        </div>
        <img className="item-image" src={props.image} />
        <div className="item-text">{props.text}</div>
        <div className="shop-link-container">
            <a className="shop-link" href={props.link}>SHOP COLLECTION</a>
        </div>
    </div>
  );
}
