import ThreadWriter from "./ThreadWriter";
import { BiUpvote } from "react-icons/bi";
import { FaRegCommentDots, FaShare } from "react-icons/fa";
import { FacebookShareButton } from "react-share";
// import ShareButton from "react-share/lib/ShareButton";

const RightPart = ({ thread }) => {
  // const shareUrl = window.location.href;
  return (
    <>
    <div className='items-start justify-start flex flex-col w-full pt-4 lg:pl-10'>
      <div className="w-full border border-gray-200 rounded-md justify-start flex flex-col px-4 pb-4">
        <div className="w-full items-start flex flex-col lg:pl-4 py-4">
          <div className='w-full space-y-5'>
            <div className="flex items-center justify-center">
              {/** top section */}
              <ThreadWriter thread={thread}  /> 
            </div>
          </div>
        </div>

        <div className="w-full items-start justify-start px-4">
          <h1 className='text-accent-2 font-bold text-2xl leading-8'>{thread.title}</h1>
        </div>

        <div className="items-center justify-center flex col-span-3 pt-4">
          <div className="col-span-1 flex">
            <button>
              <BiUpvote className="w-5 h-5 text-accent-8" />
            </button>
            <h1 className="text-accent-2 text-sm pl-2 pr-10">{thread.totalVote}</h1>
          </div>
          <div className="col-span-1 flex">
            <button>
              <FaRegCommentDots className="w-5 h-5 text-accent-9" />
            </button>
            <h1 className="text-accent-2 text-sm pl-2 pr-10">{thread.totalComments} comments</h1>
          </div>
          
          <div className="col-span-1 flex">
            <FacebookShareButton url='https://programmingknowledge-jamaica.vercel.app/'>
              <FaShare className="w-5 h-5 text-accent-2" />
            </FacebookShareButton>
            <h1 className="text-accent-2 text-sm pl-2">Share</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default RightPart;
