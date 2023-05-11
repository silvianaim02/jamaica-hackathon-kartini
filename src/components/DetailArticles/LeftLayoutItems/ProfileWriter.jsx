import { BiGroup } from 'react-icons/bi';
import {BsDot} from 'react-icons/bs'
import {SlDiamond} from 'react-icons/sl'

const ProfileWriter = ({ user }) => {
  return (
    <div className="w-full items-start border border-gray-300 rounded-md justify-start flex flex-col px-12 pb-5">
      <div className="flex relative mt-5">
        <span className="h-24 w-24 rounded-full bg-slate-400">

        </span>
      </div>
      <div className="flex items-center pt-5">
        <h1 className="font-medium text-accent-2 text-base pr-6">{user}</h1>
        <BsDot className='text-accent-9'/>
        <div className='flex justify-center items-center'>
          <span className='h-6 w-6 rounded-full bg-accent-9 flex justify-center items-center'>
            <SlDiamond className='text-white w-3 h-3' />
          </span>
          <h1 className='pl-2 text-accent-9'>Beginner</h1>
        </div>
      </div>
      <div className='flex items-center'>
        <BiGroup className='w-5 h-5 text-accent-9' />
        <h1 className='text-accent-2 text-base mt-1 pl-1'>73 Followers</h1>
      </div>
      
      <p className='text-gray-400 text-sm mt-4'>
        Pragmatic perfectionist in healthcare; fascinated with leadership, self-exploration and well-being(or not).
      </p>
      <button className='mt-4 rounded-3xl text-white text-base bg-accent-4 px-8 py-2'>
        Follow
      </button>
    </div>
  );
}

export default ProfileWriter;
