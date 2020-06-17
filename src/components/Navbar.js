import React from 'react';

class Navbar extends React.Component {
  render() {
      return(
          <div className="nav">
              <div className="search-container">
                  <input placeholder="Search for movies" />
                  <button id="search-btn"><i className="fas fa-search"></i></button>
              </div>
          </div>
      );
  }
}

export default Navbar;