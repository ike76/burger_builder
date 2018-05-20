import React, { Fragment, Component } from "react";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    sideDrawerOpen: false
  };

  toggleSideDrawer = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  render() {
    return (
      <Fragment>
        <Toolbar toggleSideDrawer={this.toggleSideDrawer} />
        <SideDrawer
          open={this.state.sideDrawerOpen}
          toggleSideDrawer={this.toggleSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
