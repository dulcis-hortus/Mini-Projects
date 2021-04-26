import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import Write from "./Write";

const App = () => {
  const [diaryList, setDiaryList] = useState([
    { date: "0000-00-00", text: "일기1" },
    {
      date: "1111-11-11",
      text: "일기2",
    },
  ]);
  const setModal = (message) => {
    alert(message);
  };

  const addDiary = (diary) => {
    setDiaryList([...diaryList, diary]);
  };

  return (
    <div className="all">
      <h1 id="title">일기장</h1>
      <Write diaryList={diaryList} addDiary={addDiary} />
      <Search diaryList={diaryList} />
    </div>
  );
};

export default App;
