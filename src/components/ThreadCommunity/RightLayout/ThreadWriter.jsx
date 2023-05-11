import { BsDot } from 'react-icons/bs';
import { SlDiamond } from 'react-icons/sl';

const ThreadWriter = ({ thread }) => {
  return (
    <> 
      <div className="flex items-center justify-center w-full space-x-4">
      <div className="">
        <img 
          src={thread.image}
          alt=''
          className="rounded-full w-full h-16 object-cover object-center"
        />
      </div>
      <div className="w-full space-y-1">
        <h1 className="text-base text-accent-2 font-medium">
          {thread.name}
        </h1>
        <div className="flex items-center">
          <p className="text-accent-2 text-sm pr-6">{thread.date}</p>
          <BsDot className='text-accent-9'/>
          <div className='flex justify-center items-center'>
            <span className='h-6 w-6 rounded-full bg-accent-9 flex justify-center items-center'>
              <SlDiamond className='text-white w-3 h-3' />
            </span>
            <h1 className='text-accent-9 pl-2'>{thread.level}</h1>
          </div>
        </div>
        </div>
      </div>

      <div className="w-full items-end justify-end flex flex-col text-sm">
        <p className='text-base text-accent-2'># {thread.category}</p>
      </div>
    </>
  );
}

export default ThreadWriter;
