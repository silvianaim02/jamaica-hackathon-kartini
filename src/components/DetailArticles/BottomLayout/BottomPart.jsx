import { BiUpvote } from "react-icons/bi";
import { FaRegCommentDots, FaShare } from "react-icons/fa";
import ShareButton from "react-share/lib/ShareButton";

const BottomPart = ({ totalComments }) => {
  const shareUrl = window.location.href;
  return (
    <div className="items-center justify-center flex col-span-3">
      <div className="col-span-1 flex">
        <button>
          <BiUpvote className="w-5 h-5 text-accent-8" />
        </button>
        <h1 className="text-accent-2 text-sm pl-2 pr-10">100</h1>
      </div>
      <div className="col-span-1 flex">
        <button>
          <FaRegCommentDots className="w-5 h-5 text-accent-9" />
        </button>
        <h1 className="text-accent-2 text-sm pl-2 pr-10">{totalComments}</h1>
      </div>
      
      <div className="col-span-1 flex">
        <ShareButton url={shareUrl} network="facebook">
          <FaShare className="w-5 h-5 text-accent-2" />
        </ShareButton>
        <h1 className="text-accent-2 text-sm pl-2">Share</h1>
      </div>
    </div>
  );
}

export default BottomPart;
