import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  goToStore = (event) =>  {
    event.preventDefault();
    const storeName = event.target.value;
    this.props.history.push(`/store/${storeName}`); 
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a Store</h2>
        <input 
          type="text" 
          required placeholder="Store Name"
          defaultValue={getFunName()}
          />
        <button type="submit" >Visit a Store</button>
      </form>
    );
  }
}

export default StorePicker;