import { ArticleDB } from "../utils/ArticleItems";
import ArticlesList from "./ArticlesList";
import ProfileWriter from "./ProfileWriter";

const LeftLayoutMain = () => {
  return (
    <div className="col-span-2 min-h-[90vh] items-start justify-start flex flex-col w-full pt-10">
      {/**profile writer section */}
      <ProfileWriter />
        <div className="w-full border border-gray-200 items-center px-12 pb-5 mt-10">
          <h2 className="pt-8 font-semibold text-accent-2 text-base pb-2">Lihat artikel lainnya</h2>

        {ArticleDB.map((article) => (
          <ArticlesList article={article} key={article.id} />
        ))}
        <button className="pt-2 text-accent-4 text-base">Lihat lebih banyak lagi</button>
      </div> 
    </div>
  );
}

export default LeftLayoutMain;
