import Warning from './utils/Warning';

import { useState } from 'react';

const Input = ({ setIsInputVisible, setIsFormsVisible, setNumberOfJobs }) => {
  const [localNumberOfJobs, setLocalNumberOfJobs] = useState(0);

  const [canProceed, setCanProceed] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleJobsChange = (e) => {
    setLocalNumberOfJobs(e.target.value);
    setNumberOfJobs(e.target.value);

    if (e.target.value > 100) setShowWarning(true);

    if (e.target.value === '') setCanProceed(false);
    else if (e.target.value < 1) setCanProceed(false);
    else setCanProceed(true);
  };

  const handleJobsClick = (override = false) => {
    if (!override) {
      if (localNumberOfJobs > 100) {
        setShowWarning(true);
        return;
      }
    }

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
          canProceed ? 'bg-green-700' : 'bg-amber-700 cursor-not-allowed'
        } `}
        disabled={!canProceed}
        onClick={handleJobsClick}
      >
        Submit
      </button>
      {showWarning && (
        <Warning
          type='input-warning'
          setShowWarning={setShowWarning}
          handleJobsClick={handleJobsClick}
          warningTitle='Warning'
          warningContent={`You are about to enter ${localNumberOfJobs} jobs, are you sure?`}
        />
      )}
    </div>
  );
};

export default Input;
