import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/burger-builder">BUILD BURGER</NavigationItem>
    <NavigationItem link="/orders">ORDERS</NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/logout">LOGOUT</NavigationItem>
    ) : (
      <NavigationItem link="/auth">LOGIN</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
