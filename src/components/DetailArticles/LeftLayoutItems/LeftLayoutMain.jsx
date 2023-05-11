import { Link } from 'react-router-dom';
// import { ArticleDB } from '../utils/ArticleItems';
import ArticlesList from './ArticlesList';
import ProfileWriter from './ProfileWriter';
import { articleItemPropTypes } from '../../ArticleCardItem';

const LeftLayoutMain = ({ articles, user }) => {
  return (
    <div className="col-span-2 min-h-[90vh] items-start justify-start flex flex-col w-full pt-10">
      {/**profile writer section */}
      <ProfileWriter user={user} />

      <div className="w-full border rounded-md border-gray-300 items-center px-12 pb-5 mt-10">
        <h2 className="pt-8 font-semibold text-accent-2 text-base pb-2">
          Lihat artikel lainnya
        </h2>
        {articles?.slice(0, 3).map((article, index) => (
          <ArticlesList article={article} key={index} />
        ))}
        <Link to="/" className="pt-2 text-accent-4 text-base">
          Lihat lebih banyak lagi
        </Link>
      </div>
    </div>
  );
};

LeftLayoutMain.propTypes = articleItemPropTypes;

export default LeftLayoutMain;
