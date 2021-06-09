import "./Diary.css";
import { Component } from "react";

import DiaryItem from "./DiaryItem";

export default class Diary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="diary-list-wrapper">
        <div className="diary-header">
          <span>내가 쓴 일기들</span>
          <button>달력</button>
        </div>
        <div className="di-list-wrapper">
          <ul className="di-list">
            <DiaryItem></DiaryItem>
            <DiaryItem></DiaryItem>
            <DiaryItem></DiaryItem>
            <DiaryItem></DiaryItem>
            <DiaryItem></DiaryItem>
          </ul>
        </div>
      </div>
    );
  }
}
