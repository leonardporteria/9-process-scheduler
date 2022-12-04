import Header from './components/Header';
import Input from './components/Input';
import Fill from './components/Fill';
import Output from './components/Output';

import { useState, useCallback } from 'react';

function App() {
  const [processData, setProcessData] = useState([]);

  // conditional rendering variables
  const [isInputVisible, setIsInputVisible] = useState(true);
  const [isFormsVisible, setIsFormsVisible] = useState(false);
  const [isOutputVisible, setIsOutputVisible] = useState(false);

  const [numberOfJobs, setNumberOfJobs] = useState(0);

  const handleOnSolveClick = useCallback((value) => {
    setProcessData(value);
  });

  return (
    <div className='min-h-screen min-w-full bg-gray-900 '>
      <Header />
      {isInputVisible && (
        <Input
          setIsInputVisible={setIsInputVisible}
          setIsFormsVisible={setIsFormsVisible}
          setNumberOfJobs={setNumberOfJobs}
        />
      )}
      {isFormsVisible && (
        <Fill
          numberOfJobs={numberOfJobs}
          setIsInputVisible={setIsInputVisible}
          setIsFormsVisible={setIsFormsVisible}
          setIsOutputVisible={setIsOutputVisible}
          handleOnSolveClick={handleOnSolveClick}
        />
      )}
      {isOutputVisible && <Output processData={processData} />}
    </div>
  );
}

export default App;
