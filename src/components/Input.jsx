import { useState } from 'react';

const Input = ({ setIsInputVisible, setIsFormsVisible, setNumberOfJobs }) => {
  const [canProceed, setCanProceed] = useState(true);
  const [localNumberOfJobs, setLocalNumberOfJobs] = useState(0);

  const handleJobsChange = (e) => {
    setLocalNumberOfJobs(e.target.value);
    setNumberOfJobs(e.target.value);

    if (e.target.value === '') setCanProceed(true);
    else if (e.target.value < 1) setCanProceed(true);
    else setCanProceed(false);
  };

  const handleJobsClick = () => {
    setIsInputVisible(false);
    setIsFormsVisible(true);
  };

  return (
    <div className='flex flex-col justify-around items-center gap-6 text-blue-50 p-4 '>
      <h1 className='text-blue-50 font-poppins font-semibold text-xl'>
        Enter Number of Jobs
      </h1>
      <input
        className='text-slate-800 p-2 rounded font-poppins text-m'
        type='number'
        placeholder='Number of Jobs'
        onChange={handleJobsChange}
      />
      <button
        className={`w-48 h-12 rounded-lg shadow-xl ${
          canProceed ? 'bg-amber-700 cursor-not-allowed' : 'bg-green-700'
        } `}
        disabled={canProceed}
        onClick={handleJobsClick}
      >
        Submit
      </button>
      {localNumberOfJobs > 100 && (
        <p>You are about to input {localNumberOfJobs} jobs, Are you sure?</p>
      )}
    </div>
  );
};

export default Input;
