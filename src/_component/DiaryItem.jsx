import "./DiaryItem.css";
import { Component } from "react";

export default class DiaryItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="diary-item">
        <div className="item-header">
          <span className="di-title">2020년 10월 15일</span>
          <div class="option-btn">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div className="di-content">
          내용내용내용내용내용내용내용내용내용...
        </div>
      </li>
    );
  }
}
