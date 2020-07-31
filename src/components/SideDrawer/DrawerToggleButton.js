import React from "react";

import "./DrawerToggleButton.css";

//This is how you make the burger-menu item
const drawerToggleButton = (props) => (
  // {/* this is taking props<Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> from App.js */}
  // this is from Toolbar <DrawerToggleButton click={props.drawerClickHandler} />
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

export default drawerToggleButton;
