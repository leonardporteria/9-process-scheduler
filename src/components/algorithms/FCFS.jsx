import { useEffect, useState } from 'react';

const FCFS = ({ processData }) => {
  const [FCFS_data, setFCFS_data] = useState([]);

  const timelineData = processData.sort((a, b) =>
    parseInt(a.arrival_time) > parseInt(b.arrival_time) ? 1 : -1
  );
  const FCFS_gantt = [
    ...FCFS_data.sort((a, b) => (a.end_time > b.end_time ? 1 : -1)),
  ];
  const FCFS_output = [...FCFS_data.sort((a, b) => (a.id > b.id ? 1 : -1))];

  const [FCFS_averageTurnAroundTime, setFCFS_averageTurnAroundTime] =
    useState(0);
  const [FCFS_averageWaitingTime, setFCFS_averageWaitingTime] = useState(0);

  const handleFCFSData = () => {
    const temporaryFCFSData = [];
    let end_time = parseInt(timelineData[0].arrival_time);

    timelineData.forEach((data) => {
      end_time += parseInt(data.burst_time);

      const FCFS_object = {
        ...data,
        end_time: end_time,
      };

      temporaryFCFSData.push(FCFS_object);
    });

    setFCFS_data(temporaryFCFSData);

    // Compute the average turnaround time and waiting time
    // TT = et - at
    // WT = tt- bt
    let tempTurnAroundTime = 0;
    let tempWaitingTime = 0;

    // total all tt and wt
    temporaryFCFSData.forEach((data) => {
      tempTurnAroundTime +=
        parseInt(data.end_time) - parseInt(data.arrival_time);
      tempWaitingTime += tempTurnAroundTime - parseInt(data.burst_time);
    });

    // get the average
    tempTurnAroundTime = (
      tempTurnAroundTime / temporaryFCFSData.length
    ).toFixed(2);
    tempWaitingTime = (tempWaitingTime / temporaryFCFSData.length).toFixed(2);

    setFCFS_averageTurnAroundTime(tempTurnAroundTime);
    setFCFS_averageWaitingTime(tempWaitingTime);
  };

  useEffect(() => {
    handleFCFSData();
  }, []);

  return (
    <section className='flex flex-col mt-8'>
      <h1 className='text-center font-semibold text-xl'>FCFS</h1>
      <h1 className='text-center font-semibold text-xl '>Gantt Chart</h1>
      {/* GANTT CHART */}
      <div className='flex flex-col mt-2'>
        <table>
          <thead>
            <tr>
              <th className='border-r-2'></th>
              {FCFS_gantt.map((data, index) => (
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
              {FCFS_gantt.map((data, index) => (
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
            {FCFS_output.map((data, index) => (
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
          <tfoot>
            <tr>
              <td
                colSpan='4'
                className='border-2 border-slate-200 p-4 text-right font-semibold'
              >
                Average Turn Around Time and Waiting Time
              </td>
              <td className='border-2 border-slate-200 p-4 text-center font-semibold'>
                {FCFS_averageTurnAroundTime}
              </td>
              <td className='border-2 border-slate-200 p-4 text-center font-semibold'>
                {FCFS_averageWaitingTime}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default FCFS;
