const SJF = ({ processData }) => {
  const timelineData = processData.sort((a, b) =>
    parseInt(a.arrival_time) > parseInt(b.arrival_time) ? 1 : -1
  );

  return <div>sskjs</div>;
};

export default SJF;
