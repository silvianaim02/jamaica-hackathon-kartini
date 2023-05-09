import BottomPart from "../components/DetailArticles/BottomLayout/BottomPart";
import LeftLayoutMain from "../components/DetailArticles/LeftLayoutItems/LeftLayoutMain";
import RightPart from "../components/DetailArticles/RightLayoutItem/RightPart";
import Navbar from "../components/navbar";

const DetailArticlePage = () => {
  return (
    <>
      <Navbar />
      <div className='grid grid-cols-1 xl:grid-cols-5 w-full col-span-10'>
        <LeftLayoutMain />
        <RightPart />
      </div>
      <div className="py-10 items-center justify-center text-center">
        <BottomPart />
      </div>
    </>
  )
};

export default DetailArticlePage;
