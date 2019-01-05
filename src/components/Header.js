import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (

        <header className="top">
          <h1>Catch
            <span className="ofThe">
              <span className="of">Of</span> 
              <span className="the">The</span> 
            </span> 
            <span>Day</span> 
          </h1>
          <h3 className="tagline">
            <p>{this.props.tagline}</p>
          </h3>
        </header>

    );
  }
}

export default Header;