import Forms from './utils/Forms';
import { useCallback } from 'react';

const Fill = ({ numberOfJobs }) => {
  const temporaryJobList = Array(parseInt(numberOfJobs)).fill(0);

  let jobNames = Array(parseInt(numberOfJobs));
  let arrivalTimes = Array(parseInt(numberOfJobs));
  let busrtTimes = Array(parseInt(numberOfJobs));
  let priorityLevels = Array(parseInt(numberOfJobs));

  const handleJobNames = useCallback((value, index) => {
    jobNames[index] = value;
  });
  const handleArrivalTime = useCallback((value, index) => {
    arrivalTimes[index] = value;
  });
  const handleBurstTime = useCallback((value, index) => {
    busrtTimes[index] = value;
  });
  const handlePriorityLevel = useCallback((value, index) => {
    priorityLevels[index] = value;
  });

  const onSubmitBtnClick = () => {
    console.log({ jobNames, arrivalTimes, busrtTimes, priorityLevels });
  };

  return (
    <div className='flex flex-col justify-around items-center gap-4 text-blue-50 p-4 '>
      <h1 className='text-blue-50 font-poppins font-semibold text-xl'>
        Enter Fields
      </h1>
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

      <button
        className='w-48 h-12 rounded-lg bg-green-700 font-poppins text-sm'
        onClick={onSubmitBtnClick}
      >
        Solve
      </button>
    </div>
  );
};

export default Fill;
