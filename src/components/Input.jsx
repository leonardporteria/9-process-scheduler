import Forms from './utils/Forms';

import { useState, useEffect } from 'react';

const Input = () => {
  let jobNames = [];
  let arrivalTimes = [];
  let busrtTimes = [];
  let priorityLevels = [];

  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (event) => {
    setInputList(
      inputList.concat(
        <Forms
          key={inputList.length}
          jobNames={jobNames}
          arrivalTimes={arrivalTimes}
          busrtTimes={busrtTimes}
          priorityLevels={priorityLevels}
        />
      )
    );
  };

  const onSubmitBtnClick = () => {
    console.log('Submit');
  };

  useEffect(() => {
    onAddBtnClick();
  }, []);

  return (
    <div className='flex flex-col justify-around items-center gap-4 text-blue-50 p-4 '>
      <h1 className='text-blue-50 font-poppins font-semibold text-xl'>
        Enter Fields
      </h1>
      <div className='flex gap-4'>
        <button
          className='w-48 h-12 rounded-lg bg-amber-700'
          onClick={onAddBtnClick}
        >
          Add Input
        </button>
        <button
          className='w-48 h-12 rounded-lg bg-green-700'
          onClick={onSubmitBtnClick}
        >
          Submit Input
        </button>
      </div>
      {inputList}
    </div>
  );
};

export default Input;
