import React, { Component } from 'react';

class AddFishForm extends Component {

  createFish = e => {
    e.preventDefault();
    const fish = {
      name: e.target.name.value,
      price: parseFloat(e.target.price.value)  ,
      status: e.target.status.value,
      desc: e.target.desc.value,
      image: e.target.image.value,
    }
    this.props.addFish(fish);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" type="text" placeholder="Name" />
        <input name="price" type="text" placeholder="Price" />
        <select name="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <input name="desc" placeholder="Desc" />
        <textarea name="image" type="text" placeholder="Image" />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;