import { postedAt } from '../../../utils';
import { articleItemPropTypes } from '../../ArticleCardItem';
import SkeletonArticle from '../../SkeletonArticle';
import TopSection from './TopSection';

const RightPart = ({ loading, title, body, user, createdAt }) => {
  if (loading) {
    return (
      <div className="mb-4">
        <SkeletonArticle />
      </div>
    );
  }

  return (
    <div className="col-span-3 items-start justify-start flex flex-col w-full pt-10">
      <div className="w-full items-start flex flex-col lg:pl-10">
        <div className="w-full space-y-5">
          <div className="flex items-center justify-center">
            {/** top section */}
            <TopSection user={user} createdAt={createdAt} />
          </div>
        </div>
      </div>

      {/** bottom section */}
      <div className="w-full items-start justify-start pl-10 pt-3">
        <p className="font-light text-gray-500 text-xs">
          published <span className="font-medium">{postedAt(createdAt)}</span>
        </p>
        <h1 className="text-accent-2 font-bold text-3xl pt-6 leading-10 text-justify">
          {title}
        </h1>
        <p className="text-accent-2 text-base pt-4 leading-7 text-justify">
          {body}
        </p>
      </div>
    </div>
  );
};

RightPart.propTypes = articleItemPropTypes;

export default RightPart;
