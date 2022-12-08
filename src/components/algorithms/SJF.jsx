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
    // pop the used array that has been pushed to tempSJFData

    const temporarySJFData = [];
    let end_time;
    let queue = [];
    let finished = [];

    timelineData.forEach((data, index) => {
      if (index === 0) {
        end_time = parseInt(data.arrival_time);
        temporarySJFData.push({
          id: -1,
          job_name: '',
          arrival_time: '',
          burst_time: '',
          priority_level: '',
          end_time: end_time,
        });

        // get all data that has arrival time of less than the end time
        const qualifiedData = timelineData.filter(
          (data) => parseInt(data.arrival_time) <= end_time
        );
        // get the smallest burst time of those qualified
        const smallestBurstTime = qualifiedData.reduce((a, b) =>
          parseInt(a.burst_time) < parseInt(b.burst_time) ? a : b
        );

        finished.push(smallestBurstTime.id);
      }
      end_time += parseInt(data.burst_time);

      // get all data that has arrival time of less than the end time
      const qualifiedData = timelineData.filter(
        (data) => parseInt(data.arrival_time) <= end_time
      );
      // get all unused jobs
      const filteredQualifiedData = qualifiedData.filter(
        (obj) => !finished.includes(parseInt(obj.id))
      );
      console.table(filteredQualifiedData);
      console.log(finished);
      // get the smallest burst time of those qualified
      const smallestBurstTime = filteredQualifiedData.reduce((a, b) =>
        parseInt(a.burst_time) < parseInt(b.burst_time) ? a : b
      );

      finished.push(smallestBurstTime.id);

      queue.push(qualifiedData);

      console.table(queue);
    });

    console.log(finished);
  };

  useEffect(() => {
    handleSJFData();
  }, []);

  return (
    <section className='flex flex-col mt-8'>
      <h1 className='text-center font-semibold text-xl'>SJF</h1>
      <h1 className='text-center font-semibold text-xl '>Gantt Chart</h1>
      {/* GANTT CHART */}

      {/* TURNAROUND AND WAITING TIME */}
      <button
        onClick={() => {
          console.log(SJF_data);
        }}
      >
        debug
      </button>
    </section>
  );
};

export default SJF;
