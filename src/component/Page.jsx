import "./Page.css";

import { Component, createRef } from "react";
import ContentEditable from "react-contenteditable";

export default class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
    };

    this.$title = createRef();
    this.$content = createRef();
  }

  onTitleKeyUp = (e) => {
    if (e.key === "Enter") {
      this.$content.current.focus();
    }
  };

  onContentKeyDown = (e) => {
    if (this.$content.current.lastChild == null) return;
    if (this.$content.current.lastChild.nodeType === Node.ELEMENT_NODE) {
      if (this.$content.current.lastChild.innerHTML.length !== 0) {
        this.setState({});
      }
    }
  };

  onContentChange = (e) => {
    this.setState({ content: e.target.value });
    const lastChild = this.$content.current.lastChild;
    if (lastChild == null || lastChild.nodeType !== Node.ELEMENT_NODE) return;
    if (
      lastChild.getBoundingClientRect().bottom >=
      this.$content.current.getBoundingClientRect().bottom
    ) {
      console.log("hit!");
    }
  };

  onContentKeyDown = (e) => {
    if (e.key === "Backspace") {
      console.log("back", this.state.content);
    }
  };

  render() {
    let $pageHeader = null;
    if (this.props.type === "main") {
      $pageHeader = (
        <div className="page-header">
          <input
            className="page-title"
            type="text"
            placeholder="제목"
            onKeyUp={this.onTitleKeyUp}
            ref={this.$title}
          />
          <div className="create-at">2021년 5월 31일</div>
        </div>
      );
    }

    const contentWrapperClassName = `content-wrapper ${this.props.type}`;

    return (
      <div className="page-wrapper">
        <div className="page">
          {$pageHeader}
          <div className={contentWrapperClassName}>
            <ContentEditable
              innerRef={this.$content}
              html={this.state.content}
              disabled={false}
              onKeyDown={this.onContentKeyDown}
              onChange={this.onContentChange}
              tagName="div"
              className="page-content"
            />
          </div>
        </div>
      </div>
    );
  }
}
