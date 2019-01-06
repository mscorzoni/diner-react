import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Fish extends Component {
  render() {
    const fish = this.props.details;
    return (
      <li className="menu-fish">
         <img src={fish.image} alt={fish.description}/>
         <h3 className="fish-name" >{fish.name}
          <span className="price">{formatPrice(fish.price)}</span>
         </h3>
         <p>{fish.desc}</p>
         <button>Add To Cart</button>
      </li>
    );
  }
}

export default Fish;