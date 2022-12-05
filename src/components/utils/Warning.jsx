const Warning = ({
  type,
  setShowWarning,
  handleJobsClick,
  warningTitle,
  warningContent,
}) => {
  return (
    <section className='absolute top-0 left-0  flex items-center justify-center w-screen h-screen bg-black bg-opacity-30 '>
      <div className='w-4/12 h-1/5 rounded-lg flex flex-col items-center justify-between p-4 bg-slate-900'>
        <h1 className='font-poppins text-2xl font-semibold'>{warningTitle}</h1>
        <p className=''>{warningContent}</p>
        <div className='flex gap-4'>
          <button
            className=''
            onClick={
              type === ' input-warning'
                ? () => {
                    setShowWarning(false);
                    handleJobsClick(false);
                  }
                : () => {
                    setShowWarning(false);
                  }
            }
          >
            ok
          </button>
          <button
            onClick={() => {
              setShowWarning(false);
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default Warning;
