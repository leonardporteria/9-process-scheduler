import Header from './components/Header';
import Input from './components/Input';
import Fill from './components/Fill';

import { useState } from 'react';

function App() {
  // conditional rendering variables
  const [isInputVisible, setIsInputVisible] = useState(true);
  const [isFormsVisible, setIsFormsVisible] = useState(false);
  const [isOutputVisible, setIsOutputVisible] = useState(false);

  const [numberOfJobs, setNumberOfJobs] = useState(0);

  return (
    <div className='min-h-screen min-w-full bg-slate-800 '>
      <Header />
      {isInputVisible && (
        <Input
          setIsInputVisible={setIsInputVisible}
          setIsFormsVisible={setIsFormsVisible}
          setNumberOfJobs={setNumberOfJobs}
        />
      )}
      {isFormsVisible && <Fill numberOfJobs={numberOfJobs} />}
      {isOutputVisible}
    </div>
  );
}

export default App;
