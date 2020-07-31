import React from 'react';

import './BackDrop.css';

//This makes everything but the element select with a dark over layer to take the focus out of it
const backdrop = props => (
    //receives from App.js
    <div className="backdrop" onClick={props.click} />
);

export default backdrop;