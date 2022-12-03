const Output = ({ processData }) => {
  return (
    <div className='flex flex-col gap-2 p-4'>
      {processData.map((data) => (
        <div
          key={data.id}
          className='grid grid-cols-4 gap-4 w-full  text-blue-50 rounded-lg shadow-xl '
        >
          <h1 className='justify-self-center'>{data.job_name}</h1>
          <h1 className='justify-self-center'> {data.arrival_time}</h1>
          <h1 className='justify-self-center'>{data.burst_time}</h1>
          <h1 className='justify-self-center'>{data.priority_level}</h1>
        </div>
      ))}
    </div>
  );
};

export default Output;
