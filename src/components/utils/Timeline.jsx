const Timeline = ({ processData }) => {
  const timelineData = processData.sort((a, b) =>
    parseInt(a.arrival_time) > parseInt(b.arrival_time) ? 1 : -1
  );

  return (
    <section className='flex flex-col mt-8'>
      <h1 className='text-center font-semibold text-xl p-4'>Timeline</h1>

      <table className='border-2 border-solid border-slate-200'>
        <thead>
          <tr className='border-2 border-solid border-slate-200  '>
            {timelineData.map((data, index) => (
              <th
                key={index}
                className='border-2 border-solid border-slate-200 p-4'
              >
                {data.job_name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            {timelineData.map((data, index) => (
              <td
                key={index}
                className='border-2 border-solid border-slate-200 text-center p-4'
              >
                {data.arrival_time}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Timeline;
