const Forms = ({ jobNames, arrivalTimes, busrtTimes, priorityLevels }) => {
  const handleJobNameChange = (e) => {
    console.log(e.target.value);
  };

  const handleArrivalTimeChange = (e) => {
    console.log(e.target.value);
  };

  const handleBurstTimeChange = (e) => {
    console.log(e.target.value);
  };

  const handlePriorityLevelChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className='flex items-start justify-around gap-4 w-full p-2'>
      {/*Job Name Input*/}
      <div className='flex gap-4'>
        <label className='text-blue-50 p-1 rounded font-poppins text-base'>
          Job Name:
        </label>
        <input
          type='text'
          placeholder='Job Name'
          onChange={handleJobNameChange}
          className='text-slate-800 p-1 rounded font-poppins text-sm'
        />
      </div>
      {/*Arrival Time Input*/}
      <div className='flex gap-4'>
        <label className='text-blue-50 p-1 rounded font-poppins text-base'>
          Arrival Time:
        </label>
        <input
          type='number'
          placeholder='Arrival Time'
          onChange={handleArrivalTimeChange}
          className='text-slate-800 p-1 rounded font-poppins text-sm'
        />
      </div>
      {/*Burst Time Input*/}
      <div className='flex gap-4'>
        <label className='text-blue-50 p-1 rounded font-poppins text-base'>
          Burst Time:
        </label>
        <input
          type='number'
          placeholder='Burst Time'
          onChange={handleBurstTimeChange}
          className='text-slate-800 p-1 rounded font-poppins text-sm'
        />
      </div>
      {/*Priority Level Input*/}
      <div className='flex gap-4'>
        <label className='text-blue-50 p-1 rounded font-poppins text-base'>
          Priority Level:
        </label>
        <input
          type='number'
          placeholder='Priority Level'
          onChange={handlePriorityLevelChange}
          className='text-slate-800 p-1 rounded font-poppins text-sm'
        />
      </div>
    </div>
  );
};

export default Forms;
