const Output = ({ processData }) => {
  return (
    <div className='flex flex-col p-4 text-blue-50 font-poppins'>
      <table className='border-2 border-solid border-slate-200'>
        <thead>
          <tr className='border-2 border-solid border-slate-200  bg-slate-200 text-lg text-slate-900'>
            <th className='border-2 border-solid border-slate-200 p-4'>
              Job Name
            </th>
            <th className='border-2 border-solid border-slate-200 p-4'>
              Arrival Time
            </th>
            <th className='border-2 border-solid border-slate-200 p-4'>
              Burst Time
            </th>
            <th className='border-2 border-solid border-slate-200 p-4'>
              Priority Level
            </th>
          </tr>
        </thead>
        <tbody>
          {processData.map((data) => (
            <tr
              key={data.id}
              className='border-2 border-solid border-slate-200'
            >
              <td className='border-2 border-solid border-slate-200 p-4'>
                {data.job_name}
              </td>
              <td className='border-2 border-solid border-slate-200 p-4'>
                {data.arrival_time}
              </td>
              <td className='border-2 border-solid border-slate-200 p-4'>
                {data.burst_time}
              </td>
              <td className='border-2 border-solid border-slate-200 p-4'>
                {data.priority_level}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Output;
