import { BsDot } from 'react-icons/bs';
import Ann from '../../../assets/beauty.jpg';
import { SlDiamond } from 'react-icons/sl';
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { postedAt } from '../../../utils';

const TopSection = ({ user, createdAt }) => {
  return (
    <>
      <div className="flex items-center justify-center w-full space-x-4">
      <div className="">
        <img 
          src={Ann}
          alt=''
          className="rounded-full w-full h-16 object-cover object-center"
        />
      </div>
      <div className="w-full space-y-1">
        <h1 className="text-base text-accent-2 font-medium">
          {user}
        </h1>
        <div className="flex items-center">
          <p className="text-accent-2 text-sm pr-6">{postedAt(createdAt)}</p>
          <BsDot className='text-accent-9'/>
          <div className='flex justify-center items-center'>
            <span className='h-6 w-6 rounded-full bg-accent-9 flex justify-center items-center'>
              <SlDiamond className='text-white w-3 h-3' />
            </span>
            <h1 className='text-accent-9 pl-2'>Beginner</h1>
          </div>
        </div>
        </div>
      </div>

      <div className="w-full items-end justify-end flex flex-col text-sm">
        <div className="flex space-x-4">
            <div className='flex flex-col'>
              <a
                href="https://instagram.com/rumahterapialbirru?igshid=Yzg5MTU1MDY="
                aria-label="whatsapp"
                className="w-10 h-10 bg-accent-4 group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="relative z-10 lg:z-20">
                  <span className="group-hover:fill-white transition-colors duration-300">
                    <BsLinkedin className='text-accent-2 hover:text-accent-1' />
                  </span>
                </div>
              </a>
            </div>
            <div className='flex flex-col'>
              <a
                href="https://instagram.com/rumahterapialbirru?igshid=Yzg5MTU1MDY="
                aria-label="insta"
                className="w-10 h-10 bg-accent-4 group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="relative z-10 lg:z-20">
                  <span className=" group-hover:fill-white transition-colors duration-300">
                    <BsInstagram className="text-accent-2 hover:text-accent-1" />
                  </span>
                </div>
              </a>
            </div>
            <div className='flex flex-col'>
              <a
                href="https://instagram.com/rumahterapialbirru?igshid=Yzg5MTU1MDY="
                aria-label="mail"
                className="w-10 h-10 bg-accent-4 group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="relative z-10 lg:z-20">
                  <span className="group-hover:fill-white transition-colors duration-300">
                    <BsTwitter className="text-accent-2 hover:text-accent-1 w-[22px] h-[22px]" />
                  </span>
                </div>
              </a>
            </div>
        </div>
      </div>
    </>
  );
}

export default TopSection;
