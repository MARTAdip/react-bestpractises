import React from 'react';
import PropTypes from 'prop-types'; 

export default function SearchBar(props) {
  //console.log(props.inputRef)
    return (
      <nav className="green accent-1 white-text ">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input onChange={(e) => props.handleSearch(e)} ref={props.inputRef} id="search" placeholder="search postname" type="search" required/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    )
};

SearchBar.propTypes = {
  handleChange: PropTypes.func,
  inputRef: PropTypes.object
}