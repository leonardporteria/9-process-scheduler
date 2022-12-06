import Forms from './utils/Forms';
import Warning from './utils/Warning';
import { useCallback, useState } from 'react';

const Fill = ({
  numberOfJobs,
  setIsInputVisible,
  setIsFormsVisible,
  setIsOutputVisible,
  handleOnSolveClick,
}) => {
  const [showWarning, setShowWarning] = useState(false);
  const [hasDuplicateJobNames, setHasDuplicateJobNames] = useState(false);

  const jobs = parseInt(numberOfJobs);
  const temporaryJobList = Array(jobs).fill(0);

  const [jobNames, setJobNames] = useState(Array(jobs));
  const [arrivalTimes, setArrivalTimes] = useState(Array(jobs));
  const [busrtTimes, setBurstTimes] = useState(Array(jobs));
  const [priorityLevels, setPriorityLevels] = useState(Array(jobs));

  const handleJobNames = useCallback(
    (value, index) => (jobNames[index] = value)
  );
  const handleArrivalTime = useCallback(
    (value, index) => (arrivalTimes[index] = value)
  );
  const handleBurstTime = useCallback(
    (value, index) => (busrtTimes[index] = value)
  );
  const handlePriorityLevel = useCallback(
    (value, index) => (priorityLevels[index] = value)
  );

  const handleHasDuplicateJobNames = (array) => {
    return new Set(array).size !== array.length;
  };

  const onBackBtnClick = () => {
    setIsInputVisible(true);
    setIsFormsVisible(false);
  };

  const onSolveBtnClick = () => {
    // check if all fields have value
    for (let i = 0; i < temporaryJobList.length; i++) {
      if (
        jobNames[i] === undefined ||
        jobNames[i].trim() === '' ||
        arrivalTimes[i] === undefined ||
        busrtTimes[i] === undefined ||
        priorityLevels[i] === undefined
      ) {
        setShowWarning(true);
        return;
      } else setShowWarning(false);
    }

    // check if there's duplicate jobNames
    if (handleHasDuplicateJobNames(jobNames)) {
      setHasDuplicateJobNames(true);
      return;
    }

    // processed details for App.js main state
    let processDetails = temporaryJobList.map((id, index) => {
      return {
        id: index,
        job_name: jobNames[index],
        arrival_time: arrivalTimes[index],
        burst_time: busrtTimes[index],
        priority_level: priorityLevels[index],
      };
    });
    handleOnSolveClick(processDetails);

    setIsFormsVisible(false);
    setIsOutputVisible(true);
  };

  return (
    <div className='flex flex-col justify-around items-center gap-4 text-blue-50 p-4 '>
      <h1 className='text-blue-50 font-poppins font-semibold text-xl'>
        Enter Fields
      </h1>
      <div className='flex flex-col gap-4'>
        {temporaryJobList.map((e, index) => (
          <Forms
            key={index}
            index={index}
            handleJobNames={(value, index) => {
              handleJobNames(value, index);
            }}
            handleArrivalTime={(value, index) => {
              handleArrivalTime(value, index);
            }}
            handleBurstTime={(value, index) => {
              handleBurstTime(value, index);
            }}
            handlePriorityLevel={(value, index) => {
              handlePriorityLevel(value, index);
            }}
          />
        ))}
      </div>

      <div className='flex gap-4'>
        <button
          className='w-48 h-12 rounded-lg bg-amber-700 font-poppins text-sm shadow-xl'
          onClick={onBackBtnClick}
        >
          Back
        </button>
        <button
          className='w-48 h-12 rounded-lg bg-green-700 font-poppins text-sm shadow-xl'
          onClick={onSolveBtnClick}
        >
          Solve
        </button>
      </div>
      {showWarning && (
        <Warning
          type='invalid-input'
          setShowWarning={setShowWarning}
          warningTitle='Invalid Input'
          warningContent='All Fields Are Required'
        />
      )}
      {hasDuplicateJobNames && (
        <Warning
          type='invalid-input'
          setShowWarning={setHasDuplicateJobNames}
          warningTitle='Duplicate Job Name'
          warningContent='Duplicate Job Name Found'
        />
      )}
    </div>
  );
};

export default Fill;
