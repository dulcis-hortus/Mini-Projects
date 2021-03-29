import React, { useState, useRef, useMemo, useCallback } from 'react';
import './App.css';
import Search from './Search';
import Write from './Write';

 

function App() { 

  // state 1 - inputs
  const [inputs, setInputs] = useState({
    date: '',
    text: ''
  });
 
  // props로 넘길 개별 값 선언
  const {date, text} = inputs;

  // input 변화 함수
  const onChange = useCallback(
    e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
    console.log("onChange 함수가 되었습니다.");
    },
    [inputs]
  );

  // 취소 버튼 함수
  const resetInputs = useCallback(
    () => {
    setInputs({
      date: '',
      text: ''
    })
    console.log("resetInput 함수가 선언되었습니다.")
    }, []);

  // state 2 - diaries
  const [diaries, setDiaries] = useState([
    {
      id: 1,
      date: "2020-08-30",
      text: "동생이 생일 선물로 받은 피자 기프티콘으로 맛있는 저녁을 먹었다!"
    },
    {
      id: 2,
      date: "2020-08-31",
      text: "내일 일기를 미리 쓰고 있습니다. :>"
    },
    {
      id: 3,
      date: "2020-09-01",
      text: "9월의 첫날이네요. 어떨까요?"
    },
    {
      id: 4,
      date: "2020-09-06",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus luctus elementum. Quisque orci nulla, feugiat eu odio eu, imperdiet dignissim orci. Sed hendrerit vestibulum molestie. Quisque porttitor laoreet urna quis tristique. Praesent tellus felis, accumsan in felis eget, viverra blandit augue. Donec dictum magna metus, vitae pellentesque dui cursus eu. Morbi iaculis porttitor tortor, sed sagittis neque finibus quis. Integer tempus turpis eget massa tristique fringilla. Aenean purus tellus, dignissim a convallis eu, interdum ut ante. Fusce interdum ipsum dui, sed dignissim odio scelerisque ac. Sed pharetra mi et mi blandit, id imperdiet orci finibus. Sed elit enim, consequat vel vestibulum et, vehicula sed est. Vivamus at magna id est fermentum cursus tincidunt at nisl."
    }
  ]);

  // 새로 만들어질 diary.id 부여
  const nextId = useRef(5);
  
  // diary 추가 함수
  const addDiary = useCallback(
    () => {
    const diary = {
      id: nextId.current,
      date,
      text
    };
 
    // 이미 있는 날짜일 경우, 기존 일기를 없에고 채워넣으려 함
    const sub_diaries = diaries.filter(diary => diary.date !== date);

    setDiaries([...sub_diaries, diary])  

    resetInputs();

    nextId.current += 1;
    alert('일기가 저장되었습니다!')

    console.log("addDiary 함수가 선언되었습니다.")
  }, [date, text, diaries, resetInputs]);

  // const textInput = useRef();
  
  // 날짜 확인 함수
  const writeCheck = useCallback(
    () => {
    const old_diary = diaries.filter(diary => diary.date === date);
    if (old_diary[0]) {
      alert('해당 날짜에 이미 일기가 적혀 있습니다. \n덮어 쓰길 원한다면 일기 작성 후 저장을 눌러주세요!') 
    } else {
      alert('해당 날짜는 비어 있습니다. 새로운 일기로 채워주세요:>')
    }
    // textInput.current.focus();
    console.log("writeCheck 함수가 선언되었습니다.")
  }, [diaries, date]);

  // diaries 변화 확인
  useMemo(() => console.log(diaries), [diaries]);

  return (
    <div className="all">
      <h1 id="title">날짜로 찾는 일기장</h1>
      <Write 
        resetInputs={resetInputs}
        date={date}
        text={text}
        // ref={textInput}
        onChange={onChange}
        addDiary={addDiary}
        writeCheck={writeCheck}/>
      <Search 
        date={date}
        diaries={diaries}/>
    </div>
  );
}


export default App;
