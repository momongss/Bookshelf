import "./Header.css";
import { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <span className="logo">일기장</span>
      </header>
    );
  }
}
