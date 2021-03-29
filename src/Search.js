import React, { useState, useMemo, useCallback } from 'react';

function UserInput({searchDiary, onChange, value}) {
  return (
    <div className="day-search">
      <div>
        <span>* 날짜 :</span>
        <input 
          value={value}
          onChange={onChange}
          placeholder=" YYYY-MM-DD"
        />
      </div>
      <button onClick={searchDiary}>찾기</button>
    </div>
  ) 
} 
 
function ScreenBorder({children}) {
  return (
    <div className="screen">
      {children}
  </div>
  );
} 

function Contents({diary}) {
  return(
    <div>
      <h3>{diary.date}</h3>
      <p>
        {diary.text}
      </p>
      <br />
    </div>
  );
}


function Unit({showList}) {
  return (
    <div>
      {showList.map( diary => (
        <Contents diary={diary} key={diary.id} />
      ))}
    </div>
  )
}

 
function Screen({showList}) {
  return (
    <ScreenBorder>
      <Unit showList={showList} />
    </ScreenBorder>
  );
}



function Search({diaries}) {

  // state 1- input
  const [input, setInput] = useState('');

  // state 2 - showList
  const [showList, setShowList] = useState([]);
 
  // 찾는 날짜로 input을 변화시키는 함수
  const onChange = useCallback(
    e => {
    setInput(e.target.value);
    }, []);

  // showList를 작성하는 함수
  // 일기를 덮어쓰면 기존 날짜에 저장되어 있던 일기가 불러진 상태라 해도 새로 쓴 일기로 바뀜
  const searchDiary = useCallback(
    () => {
      const diary = diaries.filter( diary => diary.date === input);
      const old_diary = showList.filter( diary => diary.date === input);
      if (diary[0]) {
        if (old_diary[0]) {
          const sub_diaries = showList.filter (diary => diary.date !== input);
          setShowList([...sub_diaries, diary[0]]);
        } else {
          setShowList([...showList, diary[0]]);
        }
      } else {
        alert('해당 날짜에 저장된 일기가 없습니다.')
      }
      setInput('');
  }, [diaries, input, showList]);

  useMemo(() => console.log(showList), [showList]);

    return (
      <div className="search">    
        <UserInput 
          value={input}
          onChange={onChange}
          searchDiary={searchDiary} />
        <Screen showList={showList} />
      </div>
    );
  }


  export default Search;