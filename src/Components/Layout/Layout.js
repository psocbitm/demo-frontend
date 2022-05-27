import React from "react";
import Footer from "../Footer/Footer";
import NavigationBar from "../Navbar/NavigationBar";
import classes from "./LayoutStyle.module.scss";
function Layout(props) {
  return (
    <React.Fragment>
      <NavigationBar />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
