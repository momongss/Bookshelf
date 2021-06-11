import "./Book.css";

import { Component, createRef } from "react";
import Page from "./Page";

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
    };

    this.$book = createRef();
  }

  render() {
    return (
      <div className="book-wrapper" ref={this.$book}>
        <div className="pages">
          <Page type="main" page={this.state.page}></Page>
          <Page type="normal" page={this.state.page + 1}></Page>
        </div>
      </div>
    );
  }
}
