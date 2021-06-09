import "./Book.css";

import { Component, createRef } from "react";
import Page from "./Page";

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.$book = createRef();
  }

  render() {
    return (
      <div className="book-wrapper" ref={this.$book}>
        <div className="pages">
          <Page type="main"></Page>
          <Page type="normal"></Page>
        </div>
      </div>
    );
  }
}
