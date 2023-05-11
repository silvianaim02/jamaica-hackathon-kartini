import Navbar from "../components/NavbarMain";
import LeftPart from "../components/ThreadCommunity/LeftLayout/LeftPart";
import RightPart from "../components/ThreadCommunity/RightLayout/RightPart";
import { ThreadDB } from "../components/ThreadCommunity/ThreadItems";
const ThreadCommunityPage = () => {
  return (
    <>
      <Navbar />
      <div className='container grid grid-cols-1 xl:grid-cols-5 w-full col-span-10 mx-auto lg:px-16'>
        <LeftPart />
        <div className="flex flex-col col-span-3 ">
          {ThreadDB.map((thread) => (
          <RightPart thread={thread} key={thread.id} />
        ))}
        </div>
        
      </div>
    </>
  );
}

export default ThreadCommunityPage;
