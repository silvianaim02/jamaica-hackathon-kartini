import { BiGroup } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { MdGroups } from 'react-icons/md';

const CommunityProfile = () => {
  return (
    <div className="w-full items-start border border-gray-200 rounded-md justify-start flex flex-col px-12 pb-5">
      <div className="flex relative mt-5">
        <img src='https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='community' className="h-24 w-24 rounded-xl bg-slate-400" />
      </div>
      <div className="flex items-center pt-5">
        <h1 className="font-medium text-accent-2 text-base pr-6">React INA</h1>
        <BsDot className='text-accent-9'/>
        <div className='flex justify-center items-center'>
          <span className='h-6 w-6 rounded-full bg-accent-9 flex justify-center items-center'>
            <MdGroups className='text-white w-4 h-4' />
          </span>
          <h1 className='pl-2 text-accent-9'>Community</h1>
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

export default CommunityProfile;
