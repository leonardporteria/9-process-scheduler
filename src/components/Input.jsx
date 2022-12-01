import { useState } from 'react';

const Input = ({ setIsInputVisible, setIsFormsVisible, setNumberOfJobs }) => {
  const handleJobsChange = (e) => {
    setNumberOfJobs(e.target.value);
  };

  const handleJobsClick = () => {
    setIsInputVisible(false);
    setIsFormsVisible(true);
  };

  return (
    <div className='flex flex-col justify-around items-center gap-4 text-blue-50 p-4 '>
      <h1 className='text-blue-50 font-poppins font-semibold text-xl'>
        Enter Number of Jobs
      </h1>
      <input
        type='number'
        placeholder='Number of Jobs'
        onChange={handleJobsChange}
        className='text-slate-800 p-1 rounded font-poppins text-sm'
      />
      <button
        className='w-48 h-12 rounded-lg bg-green-700'
        onClick={handleJobsClick}
      >
        Submit
      </button>
    </div>
  );
};

export default Input;
