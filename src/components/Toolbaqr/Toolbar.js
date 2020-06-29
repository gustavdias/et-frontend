import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = (props) => {
    return (
<header className="toolbar">
    <nav className="toolbar__navigation">
        {/* Use flexbox on toolbar__toggle-button */}

        {/* you deactivate this class if in desktop to make the burger menu disappear*/}
        <div className="toolbar__toggle-button">
            {/* this is taking props<Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> from App.js */}
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">THE LOGO</a></div>

        {/* !!!!!!!!!!!!!This spacer div is what separates the logo from the items!!!!!!!!!!!!! */}
        <div className="spacer" />

{/* make sure you don't see items when you are in mobile */}
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
            </ul>
        </div>
    </nav>
        </header>
    )
}

export default toolbar;
