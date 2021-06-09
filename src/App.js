import "./App.css";

import React, { useState, useRef } from "react";

import Cover from "./component/Cover";
import Book from "./component/Book";

function App() {
  const [page, setPage] = useState("cover");

  const onOpenDiary = (id) => {
    setPage("diary");
  };

  const pageMap = {
    cover: <Cover onOpenDiary={onOpenDiary}></Cover>,
    diary: <Book></Book>,
  };

  return <div className="App">{pageMap[page]}</div>;
}

export default App;
