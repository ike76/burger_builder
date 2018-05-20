import React, { Fragment } from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../../NavItems/NavItems";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) attachedClasses = [classes.SideDrawer, classes.Open];
  return (
    <Fragment>
      <Backdrop show={props.open} click={props.toggleSideDrawer} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default sideDrawer;
