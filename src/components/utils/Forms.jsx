const Forms = ({
  index,
  handleJobNames,
  handleArrivalTime,
  handleBurstTime,
  handlePriorityLevel,
}) => {
  const isDarker = index % 2 === 0;

  return (
    <div
      className={`flex items-center justify-around gap-4 w-full p-4 rounded-lg shadow-xl ${
        isDarker ? 'bg-dark-grid' : 'bg-light-grid'
      } `}
    >
      <h1 className='flex items-center justify-center w-24 rounded bg-emerald-700 font-poppins text-base'>
        Job: {`${++index}`}
      </h1>
      {/*Job Name Input*/}
      <div className='flex gap-4'>
        <label className='text-blue-50 p-1 rounded font-poppins text-base'>
          Job Name:
        </label>
        <input
          type='text'
          placeholder='Job Name'
          onChange={(e) => {
            handleJobNames(e.target.value, index);
          }}
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
          onChange={(e) => {
            handleArrivalTime(e.target.value, index);
          }}
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
          onChange={(e) => {
            handleBurstTime(e.target.value, index);
          }}
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
          onChange={(e) => {
            handlePriorityLevel(e.target.value, index);
          }}
          className='text-slate-800 p-1 rounded font-poppins text-sm'
        />
      </div>
    </div>
  );
};

export default Forms;
