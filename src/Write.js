import React from 'react';

function Write({addDiary, onChange, date, text, resetInputs, writeCheck}) {
    return (
        <div className="write">
            <span>
                <span>
                    <span>* 날짜 :</span>
                    <input 
                        autoFocus
                        name="date"
                        value={date}
                        onChange={onChange}
                        placeholder=" YYYY-MM-DD" 
                    />
                </span>
                <button
                    onClick={writeCheck}>확인
                </button>
            </span>
            <textarea
                // ref={ref}
                placeholder="일기를 작성해주세요:)"
                name="text"
                onChange={onChange}
                value={text}>
            </textarea> 
            <span>
                <button onClick={resetInputs}>취소</button>
                <button onClick={addDiary}>저장</button>
            </span>
        </div>
    )
} 

export default Write;