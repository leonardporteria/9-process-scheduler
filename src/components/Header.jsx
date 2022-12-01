import githubLogo from '../assets/github.png';
import infoIcon from '../assets/info.png';

const Header = () => {
  return (
    <div className='flex justify-around text-blue-50 p-4 font-poppins font-semibold text-2xl  '>
      <h1>Process Scheduling Calculator</h1>
      <div className='flex justify-between gap-8'>
        <img
          src={githubLogo}
          alt='github-logo'
          onClick={() => {
            window.open(
              'https://github.com/leonardporteria/OS-process-scheduler',
              '_blank'
            );
          }}
          className='cursor-pointer w-8 h-8 invert'
        />
        <img
          src={infoIcon}
          alt='info-icon'
          className='cursor-pointer w-8 h-8 invert'
        />
      </div>
    </div>
  );
};

export default Header;
