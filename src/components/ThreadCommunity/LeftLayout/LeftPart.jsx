import JoinCommunityCard from "../../JoinCommunityCard";
import CommunityProfile from "./CommunityProfile";

const LeftPart = () => {
  return (
    <div className="col-span-2 min-h-[90vh] items-start justify-start flex flex-col w-full pt-4">
      <CommunityProfile />
      <JoinCommunityCard />
    </div>
  );
}

export default LeftPart;
