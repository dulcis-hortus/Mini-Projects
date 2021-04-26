import React, { useState } from "react";

function Write({ diaryList, addDiary }) {
  const [newDiary, setNewDiary] = useState({ date: "", text: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setNewDiary({
      ...newDiary,
      [name]: value,
    });
  };

  const duplicationCheck = () => {
    const duplicateDiary = diaryList.filter(
      (diary) => diary.date === newDiary.date
    );
    if (duplicateDiary[0]) {
      alert(
        "해당 날짜에 이미 일기가 적혀 있습니다. \n덮어 쓰길 원한다면 일기 작성 후 저장을 눌러주세요!"
      );
    } else {
      alert("해당 날짜는 비어 있습니다. 새로운 일기로 채워주세요:>");
    }
  };

  return (
    <div className="write">
      <span>
        <span>
          <span>* 날짜 :</span>
          <input
            autoFocus
            name="date"
            onChange={onChange}
            placeholder=" YYYY-MM-DD"
            value={newDiary.date}
          />
        </span>
        <button onClick={newDiary && diaryList ? duplicationCheck : null}>
          확인
        </button>
      </span>
      <textarea
        placeholder="일기를 작성해주세요:)"
        name="text"
        onChange={onChange}
        value={newDiary.text}
      ></textarea>
      <span>
        <button
          onClick={() => {
            setNewDiary({ ...newDiary, date: "", text: "" });
          }}
        >
          취소
        </button>
        <button
          onClick={() => {
            addDiary(newDiary);
            setNewDiary({ ...newDiary, date: "", text: "" });
          }}
        >
          저장
        </button>
      </span>
    </div>
  );
}

export default Write;
