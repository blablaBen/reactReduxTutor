import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Route } from "react-router-dom";
import Home from "./features/Home/Home";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Unsplash</NavbarBrand>
        </Navbar>
        <div>
          <Route path="/" component={Home} />
        </div>
      </div>
    );
  }
}
