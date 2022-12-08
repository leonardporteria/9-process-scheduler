import { useEffect, useState } from 'react';

const SJF = ({ processData }) => {
  const [SJF_data, setSJF_data] = useState([]);

  const timelineData = processData.sort((a, b) =>
    parseInt(a.arrival_time) > parseInt(b.arrival_time) ? 1 : -1
  );
  const SJF_gantt = [
    ...SJF_data.sort((a, b) => (a.end_time > b.end_time ? 1 : -1)),
  ];
  const SJF_output = [...SJF_data.sort((a, b) => (a.id > b.id ? 1 : -1))];

  const handleSJFData = () => {
    // filter all array that's within the end time
    // push to tempSJFData the used object

    const temporarySJFData = [];
    const finishedId = [];
    let end_time = parseInt(timelineData[0].arrival_time);

    timelineData.forEach(() => {
      const qualifiedData = timelineData.filter(
        (data) =>
          parseInt(data.arrival_time) <= end_time &&
          !finishedId.includes(data.id)
      );

      // if qualifiedData.lenght === 0 return qualified data, else reduce
      const smallestBurstTime =
        qualifiedData.length < 1
          ? qualifiedData
          : qualifiedData.reduce((a, b) =>
              parseInt(a.burst_time) < parseInt(b.burst_time) ? a : b
            );

      // add the end time
      end_time += parseInt(smallestBurstTime.burst_time);

      finishedId.push(smallestBurstTime.id);
      temporarySJFData.push({ ...smallestBurstTime, end_time: end_time });
    });
    setSJF_data(temporarySJFData);
  };

  useEffect(() => {
    handleSJFData();
  }, []);

  return (
    <section className='flex flex-col mt-8'>
      <h1 className='text-center font-semibold text-xl'>SJF</h1>
      <h1 className='text-center font-semibold text-xl '>Gantt Chart</h1>
      {/* GANTT CHART */}
      <div className='flex flex-col mt-2'>
        <table>
          <thead>
            <tr>
              <th className='border-r-2'></th>
              {SJF_gantt.map((data, index) => (
                <th key={index} className='text-center border-r-2 p-2'>
                  {data.job_name}
                  {data.burst_time}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-right border-r-2 border-t-2 p-2'>
                {timelineData[0].arrival_time}
              </td>
              {SJF_gantt.map((data, index) => (
                <td
                  key={index}
                  className='text-right border-r-2 border-t-2 p-2'
                >
                  {data.end_time}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* TURNAROUND AND WAITING TIME */}
      <div className='flex flex-col mt-2'>
        <table className='border-2 border-solid border-slate-200'>
          <thead>
            <tr className='border-2 border-solid border-slate-200  bg-slate-200 text-lg  text-slate-900'>
              <th className='p-4'>Job Name</th>
              <th className='p-4'>Arrival Time</th>
              <th className='p-4'>Burst Time</th>
              <th className='p-4'>End Time</th>
              <th className='p-4'>Turn Around Time</th>
              <th className='p-4'>Waiting Time</th>
            </tr>
          </thead>
          <tbody>
            {SJF_output.map((data, index) => (
              <tr key={index}>
                <td className='text-center border-2 p-4'>{data.job_name}</td>
                <td className='text-center border-2 p-4'>
                  {data.arrival_time}
                </td>
                <td className='text-center border-2 p-4'>{data.burst_time}</td>
                <td className='text-center border-2 p-4'>
                  {data.end_time || data}
                </td>
                <td className='text-center border-2 p-4'>
                  {data.end_time - parseInt(data.arrival_time)}
                </td>
                <td className='text-center border-2 p-4'>
                  {data.end_time -
                    parseInt(data.arrival_time) -
                    parseInt(data.burst_time)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SJF;
