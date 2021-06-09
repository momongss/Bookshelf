import "./Cover.css";

import { Component, createRef } from "react";

export default class Cover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      title: "다이어리",
      name: "",
    };

    this.$titleRef = createRef();
  }

  onTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onTitleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.$titleRef.current.blur();
    }
  };

  onClick = (e) => {
    e.target.select();
  };

  onCoverClick = (e) => {
    if (e.target.className === "cover-wrapper") {
      this.props.onOpenDiary(this.state.id);
    }
  };

  render() {
    return (
      <div className="cover-wrapper" onClick={this.onCoverClick}>
        <input
          type="text"
          value={this.state.title}
          placeholder="다이어리 이름"
          className="cover-title"
          onChange={this.onTitleChange}
          onKeyDown={this.onTitleKeyDown}
          onClick={this.onClick}
          ref={this.$titleRef}
        />
      </div>
    );
  }
}
