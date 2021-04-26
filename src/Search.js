import React, { useState } from "react";

const Search = ({ diaryList }) => {
  const [date, setDate] = useState("");
  const [searchedList, setSearchedList] = useState([]);

  const addSearchList = () => {
    const targetDiary = diaryList.filter((diary) => diary.date === date);
    if (targetDiary[0]) {
      setSearchedList([...searchedList, targetDiary[0]]);
    } else {
      alert("해당 날짜에 일기가 없습니다.");
    }
    setDate("");
  };

  return (
    <div className="search">
      <div className="day-search">
        <span>* 날짜 :</span>
        <input
          onChange={(e) => setDate(e.target.value)}
          placeholder=" YYYY-MM-DD"
          value={date}
        />
        <button onClick={addSearchList}>찾기</button>
      </div>
      <Screen showList={searchedList} />
    </div>
  );
};

const ScreenBorder = ({ children }) => {
  return <div className="screen">{children}</div>;
};

const Contents = ({ diary }) => {
  return (
    <div>
      <h3>{diary.date}</h3>
      <p>{diary.text}</p>
      <br />
    </div>
  );
};

const Screen = ({ showList }) => {
  return (
    <ScreenBorder>
      {showList.map((diary, i) => (
        <Contents diary={diary} key={i} />
      ))}
    </ScreenBorder>
  );
};

export default Search;
