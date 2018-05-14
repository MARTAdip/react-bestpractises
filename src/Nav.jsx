import React from 'react';
import NavContainer from './NavContainer.jsx';
import PropTypes from 'prop-types'; 

//TODO this file doesnt need the props, it is just stupid passing the props to DesktopNav & SideBar
//Replace the whole props-chain with Context https://reactjs.org/docs/context.html
export default function Nav(props) {
  return (
    <div>
       <NavContainer /> 
    </div>
  )
};

Nav.propTypes = {
  theme: PropTypes.string
}